import axios from "axios";
import { Prod_Prom } from "@/types/db";

export async function ObtenerProd_Prom() {
  const result = await axios.get(`${process.env.BACKEND_API_URL}/prodProm`);
  //console.log(result.data);
  return result.data;
}

export async function CrearProd_Prom(
  prodProm: Omit<Prod_Prom, "id_producto" | "id_promocion">
) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/prodProm`,
    prodProm
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarProd_Prom(
  prodProm: Omit<Prod_Prom, "id_producto" | "id_promocion">,
  id: number
) {
  const result = await axios.put(
    `${process.env.BACKEND_API_URL}/prodProm/${id}`,
    prodProm
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarProd_Prom(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/prodProm/${id}`
  );
  //console.log(result.data);
  return result.data;
}
