import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

// GET es el metodo para obtener todos los usuarios
export async function GET(request: Request) {
  const result = await sql`SELECT * 
  FROM Lista_Producto lp
  INNER JOIN Factura f ON lp.id_factura = f.id_factura`;
  // console.log(result);
  return NextResponse.json({ data: result }, { status: 200 });
}
