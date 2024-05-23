import axios from "axios";
import { Factura } from "@/types/model";

export async function ObtenerFactura() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/factura`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearFactura(
  factura: Omit<Factura, "id_factura" | "id_usuario" | "id_personal">
) {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/factura`,
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
    `${process.env.NEXT_PUBLIC_APP_URL}/api/factura/${id}`,
    factura
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarFactura(id: number) {
  const result = await axios.delete(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/factura/${id}`
  );
  //console.log(result.data);
  return result.data;
}
