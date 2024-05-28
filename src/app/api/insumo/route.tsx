import { NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary";
import { CrearInsumo } from "@/data/Insumo";

export async function POST(request: Request) {
  const data = await request.formData();
  const image = data.get("file_image") as File;

  if (!image) {
    return NextResponse.json({ message: "No file" }, { status: 400 });
  }

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // const filePath = path.join(process.cwd(), "public", "insumo", image.name);
  // await writeFile(filePath, buffer);

  const response: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
      .end(buffer);
  });

  const result = await CrearInsumo({
    nombre: data.get("nombre") as string,
    categoria: data.get("categoria") as any,
    cantidad: Number(data.get("cantidad")),
    medida: data.get("medida") as any,
    img_url: response.url,
  });

  return NextResponse.json(
    {
      message: "Imagen Subida",
      url: response.url,
    },
    { status: 200 }
  );
}
