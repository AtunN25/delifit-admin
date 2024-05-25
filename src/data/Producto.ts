import axios from "axios";
import { Producto } from "@/types/db";

export async function ObtenerProducto() {
  const result = await axios.get(`${process.env.BACKEND_API_URL}/producto`);
  //console.log(result.data);
  return result.data;
}

export async function CrearProducto(producto: Omit<Producto, "id_producto">) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/producto`,
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
    `${process.env.BACKEND_API_URL}/producto/${id}`,
    producto
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarProducto(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/producto/${id}`
  );
  //console.log(result.data);
  return result.data;
}
