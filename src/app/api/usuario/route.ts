import { sql } from "@/libs/db";
import { NextResponse } from "next/server";

// GET es el metodo para obtener todos los usuarios
export async function GET(request: Request) {
  const result = await sql`SELECT * FROM usuario`;
  console.log(result);
  return NextResponse.json({ data: result }, { status: 200 });
}

// POST es el metodo para crear un usuario
export async function POST(request: Request) {
  const { nombre, apellido, img_url, documento, tipo_doc } =
    await request.json();
  const result = await sql`
    INSERT INTO usuario (nome, email, senha)
    VALUES (${nombre}, ${apellido}, ${img_url}, ${documento}, ${tipo_doc})
    RETURNING *`;
  return NextResponse.json({ data: result }, { status: 201 });
}

// DELETE es el metodo para eliminar un usuario
export async function DELETE(request: Request) {
  const { id } = await request.json();
  const result = await sql`
    DELETE FROM usuario
    WHERE id = ${id}
    RETURNING *`;
  return NextResponse.json({ data: result }, { status: 200 });
}

// PUT es el metodo para actualizar un usuario
export async function PUT(request: Request) {
  const { id, nombre, apellido, img_url, documento, tipo_doc } =
    await request.json();
  const result = await sql`
    UPDATE usuario
    SET nombre = ${nombre}, apellido = ${apellido}, img_url = ${img_url}, documento = ${documento}, tipo_doc = ${tipo_doc}
    WHERE id = ${id}
    RETURNING *`;
  return NextResponse.json({ data: result }, { status: 200 });
}
