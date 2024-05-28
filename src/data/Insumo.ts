import axios from "axios";
import { Insumo } from "@/types/db";

export async function ObtenerInsumo() {
  const result = await axios.get(`${process.env.BACKEND_API_URL}/insumo`);
  //console.log(result.data);
  return result.data;
}

export async function CrearInsumo(
  insumo: Omit<Insumo, "id_insumo" | "visibilidad">
) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/insumo`,
    insumo
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarInsumo(
  insumo: Omit<Insumo, "id_insumo">,
  id: number
) {
  const result = await axios.put(
    `${process.env.BACKEND_API_URL}/insumo/${id}`,
    insumo
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarInsumo(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/insumo/${id}`
  );
  //console.log(result.data);
  return result.data;
}
