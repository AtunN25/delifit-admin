import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

// GET es el metodo para obtener todos los usuarios
export async function GET(request: Request) {
  const result = await sql`SELECT * FROM usuario`;
  // console.log(result);
  return NextResponse.json({ data: result }, { status: 200 });
}

// POST es el metodo para crear un usuario
export async function POST(request: Request) {
  const { nombre, apellido, img_url, telefono, documento, puntos, tipo_doc } =
    await request.json();

  let result;
  try {
    result = await sql`
      SELECT public.registrar_usuario(
        ${img_url},
        ${nombre}, 
        ${apellido}, 
        ${documento}, 
        ${puntos}, 
        ${tipo_doc},
        ${telefono}
      )`;
  } catch (error) {
    if ((error as Error).message.includes("ya registrado")) {
      return NextResponse.json(
        { message: "Error BD", error: "Usuario ya está registrado" },
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
