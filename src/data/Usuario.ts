import axios from "axios";
import { Usuario } from "@/types/db";

export async function ObtenerUsuario() {
  const result = await axios.get(`${process.env.BACKEND_API_URL}/usuario`);
  console.log(result.data);
  return result.data;
}

export async function CrearUsuario(
  usuario: Omit<Usuario, "id_usuario" | "puntos">
) {
  const result = await axios.post(
    `${process.env.BACKEND_API_URL}/usuario`,
    usuario
  );
  //console.log(result.data);
  return result.data;
}

export async function ActualizarUsuario(
  usuario: Omit<Usuario, "id_usuario">,
  id: number
) {
  const result = await axios.put(
    `${process.env.BACKEND_API_URL}/usuario/${id}`,
    usuario
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarUsuario(id: number) {
  const result = await axios.delete(
    `${process.env.BACKEND_API_URL}/usuario/${id}`
  );
  //console.log(result.data);
  return result.data;
}
