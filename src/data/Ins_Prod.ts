import axios from "axios";
import { Ins_Prod } from "@/types/model";

export async function ObtenerIns_Prod() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/insProd`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearIns_Prod(
  insProd: Omit<Ins_Prod, "id_insumo" | "id_producto">
) {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/insProd`,
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
    `${process.env.NEXT_PUBLIC_APP_URL}/api/insProd/${id}`,
    insProd
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarIns_Prod(id: number) {
  const result = await axios.delete(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/insProd/${id}`
  );
  //console.log(result.data);
  return result.data;
}
