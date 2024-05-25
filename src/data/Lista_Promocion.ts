import axios from "axios";
import { Lista_Promocion } from "@/types/db";

export async function ObtenerPromocion() {
  const result = await axios.get(
    `${process.env.BACKEND_API_URL}/listaPromocion`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearPromocion(
  promocion: Omit<Lista_Promocion, "id_promocion" | "id_factura">
) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/listaPromocion`,
    promocion
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarPromocion(
  promocion: Omit<Lista_Promocion, "id_promocion" | "id_factura">,
  id: number
) {
  const result = await axios.put(
    `${process.env.BACKEND_API_URL}/listaPromocion/${id}`,
    promocion
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarPromocion(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/listaPromocion/${id}`
  );
  //console.log(result.data);
  return result.data;
}
