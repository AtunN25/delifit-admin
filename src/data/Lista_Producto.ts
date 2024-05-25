import axios from "axios";
import { Lista_Producto } from "@/types/db";

export async function ObtenerLista_Producto() {
  const result = await axios.get(
    `${process.env.BACKEND_API_URL}/listaProducto`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearLista_Producto(
  listaProducto: Omit<Lista_Producto, "id_producto" | "id_factura">
) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/listaProducto`,
    listaProducto
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarLista_Producto(
  listaProducto: Omit<Lista_Producto, "id_producto" | "id_factura">,
  id: number
) {
  const result = await axios.put(
    `${process.env.BACKEND_API_URL}/listaProducto/${id}`,
    listaProducto
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarLista_Producto(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/listaProducto/${id}`
  );
  //console.log(result.data);
  return result.data;
}
