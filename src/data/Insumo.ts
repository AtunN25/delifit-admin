import axios from "axios";
import { Insumo } from "@/types/model";

export async function ObtenerInsumo() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/insumo`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearInsumo(insumo: Omit<Insumo, "id_insumo">) {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/insumo`,
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
    `${process.env.NEXT_PUBLIC_APP_URL}/api/insumo/${id}`,
    insumo
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarInsumo(id: number) {
  const result = await axios.delete(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/insumo/${id}`
  );
  //console.log(result.data);
  return result.data;
}
