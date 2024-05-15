import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

interface Params {
  id: string;
}

// DELETE es el metodo para eliminar un usuario
export async function DELETE(request: Request, context: { params: Params }) {
  const result = await sql`
    DELETE FROM usuario
    WHERE id = ${context.params.id}
    RETURNING *`;
  return NextResponse.json({ data: result }, { status: 200 });
}

// PUT es el metodo para actualizar un usuario
export async function PUT(request: Request, context: { params: Params }) {
  const { nombre, apellido, img_url, telefono, documento, tipo_doc, puntos } =
    await request.json();
  const result = await sql`
    UPDATE usuario 
    SET nombre = ${nombre}, 
        apellido = ${apellido}, 
        img_url = ${img_url}, 
        telefono= ${telefono}, 
        documento = ${documento}, 
        tipo_doc = ${tipo_doc}
        puntos = ${puntos}
    WHERE id = ${context.params.id}
    RETURNING *`;
  return NextResponse.json({ data: result }, { status: 200 });
}