import axios from "axios";
import { Factura } from "@/types/db";

export async function ObtenerFactura() {
  const result = await axios.get(`${process.env.BACKEND_API_URL}/factura`);
  //console.log(result.data);
  return result.data;
}

export async function CrearFactura(
  factura: Omit<Factura, "id_factura" | "id_usuario" | "id_personal">
) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/factura`,
    factura
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarFactura(
  factura: Omit<Factura, "id_factura" | "id_usuario" | "id_personal">,
  id: number
) {
  const result = await axios.put(
    `${process.env.BACKEND_API_URL}/factura/${id}`,
    factura
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarFactura(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/factura/${id}`
  );
  //console.log(result.data);
  return result.data;
}
