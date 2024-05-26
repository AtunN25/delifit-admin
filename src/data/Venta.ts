import axios from "axios";
import { Venta } from "@/types/db";

// hacer lo cmabios necesarios para que funcione con la tabla venta
// debido a la migracion del proyecto API

export async function ObtenerVenta() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/venta`
  );
  //console.log(result.data);
  return result.data;
}
