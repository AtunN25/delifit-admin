import axios from "axios";
import { Promocion } from "@/types/db";

export async function ObtenerPromocion() {
  const result = await axios.get(`${process.env.BACKEND_API_URL}/promocion`);
  //console.log(result.data);
  return result.data;
}

export async function CrearPromocion(
  promocion: Omit<Promocion, "id_promocion">
) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/promocion`,
    promocion
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarPromocion(
  promocion: Omit<Promocion, "id_promocion">,
  id: number
) {
  const result = await axios.put(
    `${process.env.BACKEND_API_URL}/promocion/${id}`,
    promocion
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarPromocion(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/promocion/${id}`
  );
  //console.log(result.data);
  return result.data;
}
