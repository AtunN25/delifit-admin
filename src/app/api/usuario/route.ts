import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

// GET es el metodo para obtener todos los usuarios
export async function GET(request: Request) {
  const result = await sql`SELECT * FROM usuario`;
  //console.log(result);
  return NextResponse.json({ data: result }, { status: 200 });
}

// POST es el metodo para crear un usuario
export async function POST(request: Request) {
  const { nombre, apellido, img_url, telefono, documento, tipo_doc } =
    await request.json();
  const result = await sql`
    INSERT INTO usuario (nombre, apellido, img_url, telefono, documento, tipo_doc)
    VALUES (${nombre}, ${apellido}, ${img_url}, ${telefono}, ${documento}, ${tipo_doc})
    RETURNING *`;
  return NextResponse.json({ data: result }, { status: 201 });
}
