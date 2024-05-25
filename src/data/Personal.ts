import axios from "axios";
import { Personal } from "@/types/db";

export async function ObtenerPersonal() {
  const result = await axios.get(`${process.env.BACKEND_API_URL}/personal`);
  //console.log(result.data);
  return result.data;
}

export async function CrearPersonal(personal: Omit<Personal, "id_personal">) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/personal`,
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
    `${process.env.BACKEND_API_URL}/personal/${id}`,
    personal
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarPersonal(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/personal/${id}`
  );
  //console.log(result.data);
  return result.data;
}
