import axios from "axios";
import { Promocion } from "@/types/model";

export async function ObtenerPromocion() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/promocion`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearPromocion(
  promocion: Omit<Promocion, "id_promocion">
) {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/promocion`,
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
    `${process.env.NEXT_PUBLIC_APP_URL}/api/promocion/${id}`,
    promocion
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarPromocion(id: number) {
  const result = await axios.delete(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/promocion/${id}`
  );
  //console.log(result.data);
  return result.data;
}
