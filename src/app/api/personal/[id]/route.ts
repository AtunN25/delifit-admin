import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function GET(request: Request, context: { params: Params }) {
  const { id } = context.params;
  const [dataDB] = await sql`SELECT * FROM personal where id_personal = ${id}`;

  // En caso el usuario no exista
  if (!dataDB || dataDB.length === 0) {
    return NextResponse.json(
      { message: "Personal no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: dataDB }, { status: 200 });
}

// PUT
export async function PUT(request: Request, context: { params: Params }) {
  const { id } = context.params;

  let [dataDB] = await sql`SELECT * FROM personal where id_personal = ${id}`;
  console.log("Data base: " + dataDB);
  if (!dataDB || dataDB.length === 0) {
    return NextResponse.json(
      { message: "Personal no encontrado" },
      { status: 404 }
    );
  }

  const { nombre, apellido, contrasena, documento, telefono, tipo_doc, rol } =
    await request.json();

  const result = await sql`
    UPDATE personal 
    SET nombre = ${nombre}, 
        apellido = ${apellido}, 
        contrasena = ${contrasena}, 
        documento = ${documento}, 
        telefono= ${telefono}, 
        tipo_doc = ${tipo_doc},
        rol = ${rol}
    WHERE id_personal = ${id}
    RETURNING *`;
  return NextResponse.json({ data: result }, { status: 200 });
}

// PATCH
export async function PATCH(request: Request, context: { params: Params }) {
  const { id } = context.params;

  const [result] = await sql`SELECT * FROM personal WHERE id_personal = ${id}`;

  // En caso el usuario no exista
  if (!result || result.length === 0) {
    return NextResponse.json(
      { message: "Personal no encontrado" },
      { status: 404 }
    );
  }

  const data = await request.json();

  // Actualizo el usuario
  const perUpd = { ...result, ...data };

  console.log(perUpd);

  await sql`
  UPDATE personal 
  SET nombre = ${perUpd.nombre}, 
      apellido = ${perUpd.apellido}, 
      contrasena = ${perUpd.contrasena}, 
      documento = ${perUpd.documento}, 
      telefono= ${perUpd.telefono}, 
      tipo_doc = ${perUpd.tipo_doc},
      rol = ${perUpd.rol}
  WHERE id_personal = ${id}
  RETURNING *`;
  return NextResponse.json({ data: perUpd }, { status: 200 });
}

// DELETE es el metodo para eliminar un usuario
export async function DELETE(request: Request, context: { params: Params }) {
  const { id } = context.params;

  const [dataDB] = await sql`SELECT * FROM personal where id_personal = ${id}`;

  if (!dataDB || dataDB.length === 0) {
    return NextResponse.json(
      { message: "Personal no encontrado" },
      { status: 404 }
    );
  }

  const result = await sql`
      DELETE FROM personal WHERE id_personal = ${id} RETURNING *`;
  console.log(result);
  return NextResponse.json(
    { message: `Se eliminó el Personal de id: ${id}`, data: result },
    { status: 200 }
  );
}
