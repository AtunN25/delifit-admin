import axios from "axios";
import { Venta } from "@/types/model";

export async function ObtenerVenta() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/venta`
  );
  //console.log(result.data);
  return result.data;
}
