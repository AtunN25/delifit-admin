import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function GET(request: Request, context: { params: Params }) {
  const { id } = context.params;
  const [dataDB] =
    await sql`SELECT * FROM usuario where usuario.id_usuario = ${id}`;

  // En caso el usuario no exista
  if (!dataDB || dataDB.length === 0) {
    return NextResponse.json(
      { message: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: dataDB }, { status: 200 });
}

// PUT es el metodo para actualizar un usuario
export async function PUT(request: Request, context: { params: Params }) {
  const { id } = context.params;

  let [dataDB] =
    await sql`SELECT * FROM usuario where usuario.id_usuario = ${id}`;

  // En caso el usuario no exista
  if (!dataDB || dataDB.length === 0) {
    return NextResponse.json(
      { message: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  const { img_url, nombre, apellido, documento, puntos, tipo_doc, telefono } =
    await request.json();

  const result = await sql`
    UPDATE usuario 
    SET 
      img_url = ${img_url},   
      nombre = ${nombre}, 
      apellido = ${apellido}, 
      documento = ${documento}, 
      puntos = ${puntos},
      tipo_doc = ${tipo_doc},
      telefono= ${telefono}
    WHERE id_usuario = ${id}
    RETURNING *`;
  return NextResponse.json({ data: result }, { status: 200 });
}

// PATCH es el metodo para actualizar un usuario

export async function PATCH(request: Request, context: { params: Params }) {
  const { id } = context.params;

  const [result] =
    await sql`SELECT * FROM usuario where usuario.id_usuario = ${id}`;

  // En caso el usuario no exista
  if (!result || result.length === 0) {
    return NextResponse.json(
      { message: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  const data = await request.json();

  // Actualizo el usuario
  const userUpd = { ...result, ...data };

  console.log(userUpd);

  await sql`
    UPDATE usuario 
    SET 
      img_url = ${userUpd.img_url}, 
      nombre = ${userUpd.nombre}, 
      apellido = ${userUpd.apellido}, 
      puntos = ${userUpd.puntos},
      tipo_doc = ${userUpd.tipo_doc},
      telefono = ${userUpd.telefono},
      documento = ${userUpd.documento}
    WHERE id_usuario = ${id}
    RETURNING *
  `;
  return NextResponse.json({ data: userUpd }, { status: 200 });
}

// DELETE es el metodo para eliminar un usuario
export async function DELETE(request: Request, context: { params: Params }) {
  const { id } = context.params;

  const [dataDB] =
    await sql`SELECT * FROM usuario where usuario.id_usuario = ${id}`;

  if (!dataDB || dataDB.length === 0) {
    return NextResponse.json(
      { message: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  const result = await sql`
      DELETE FROM usuario WHERE usuario.id_usuario = ${id} RETURNING *`;
  return NextResponse.json({ data: result }, { status: 200 });
}
