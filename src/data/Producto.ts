import axios from "axios";
import { Producto } from "@/types/model";

export async function ObtenerProducto() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/producto`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearProducto(producto: Omit<Producto, "id_producto">) {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/producto`,
    producto
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarProducto(
  producto: Omit<Producto, "id_producto">,
  id: number
) {
  const result = await axios.put(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/producto/${id}`,
    producto
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarProducto(id: number) {
  const result = await axios.delete(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/producto/${id}`
  );
  //console.log(result.data);
  return result.data;
}
