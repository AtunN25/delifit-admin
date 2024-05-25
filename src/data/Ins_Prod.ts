import axios from "axios";
import { Ins_Prod } from "@/types/db";

export async function ObtenerIns_Prod() {
  const result = await axios.get(`${process.env.BACKEND_API_URL}/insProd`);
  //console.log(result.data);
  return result.data;
}

export async function CrearIns_Prod(
  insProd: Omit<Ins_Prod, "id_insumo" | "id_producto">
) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/insProd`,
    insProd
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarIns_Prod(
  insProd: Omit<Ins_Prod, "id_insumo" | "id_producto">,
  id: number
) {
  const result = await axios.put(
    `${process.env.BACKEND_API_URL}/insProd/${id}`,
    insProd
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarIns_Prod(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/insProd/${id}`
  );
  //console.log(result.data);
  return result.data;
}
