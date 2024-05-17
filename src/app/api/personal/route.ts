import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

// GET
export async function GET(request: Request) {
  const result = await sql`SELECT * FROM personal`;
  // console.log(result);
  return NextResponse.json({ data: result }, { status: 200 });
}

// POST
export async function POST(request: Request) {
  const { nombre, apellido, contrasena, documento, telefono, tipo_doc, rol } =
    await request.json();

  let result;
  try {
    result = await sql`
    SELECT public.registrar_personal(
      ${nombre},
      ${apellido},
      ${contrasena},
      ${documento},   
      ${telefono},
      ${tipo_doc},
      ${rol}
    )`;
    console.log(result);
  } catch (error) {
    console.log(error);
    if ((error as Error).message.includes("ya registrado")) {
      return NextResponse.json(
        { message: "Error BD", error: "Personal ya está registrado" },
        { status: 409 }
      );
    } else {
      return NextResponse.json(
        { message: "Error BD", error: (error as Error).message },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ data: result }, { status: 201 });
}
