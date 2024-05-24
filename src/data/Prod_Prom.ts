import axios from "axios";
import { Prod_Prom } from "@/types/model";

export async function ObtenerProd_Prom() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/prodProm`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearProd_Prom(
  prodProm: Omit<Prod_Prom, "id_producto" | "id_promocion">
) {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/prodProm`,
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
    `${process.env.NEXT_PUBLIC_APP_URL}/api/prodProm/${id}`,
    prodProm
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarProd_Prom(id: number) {
  const result = await axios.delete(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/prodProm/${id}`
  );
  //console.log(result.data);
  return result.data;
}
