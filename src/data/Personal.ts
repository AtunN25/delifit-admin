import axios from "axios";
import { Personal } from "@/types/model";

export async function ObtenerPersonal() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/personal`
  );
  //console.log(result.data);
  return result.data;
}

export async function CrearPersonal(personal: Omit<Personal, "id_personal">) {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/personal`,
    personal
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarPersonal(
  personal: Omit<Personal, "id_personal">,
  id: number
) {
  const result = await axios.put(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/personal/${id}`,
    personal
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarPersonal(id: number) {
  const result = await axios.delete(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/personal/${id}`
  );
  //console.log(result.data);
  return result.data;
}
