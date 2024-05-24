import axios from "axios";
import { Lista_Producto } from "@/types/model";

export async function ObtenerLista_Producto() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/listaProducto`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearLista_Producto(
  listaProducto: Omit<Lista_Producto, "id_producto" | "id_factura">
) {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/listaProducto`,
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
    `${process.env.NEXT_PUBLIC_APP_URL}/api/listaProducto/${id}`,
    listaProducto
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarLista_Producto(id: number) {
  const result = await axios.delete(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/listaProducto/${id}`
  );
  //console.log(result.data);
  return result.data;
}
