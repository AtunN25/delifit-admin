import axios from "axios";
import { Usuario } from "@/types/model";

export async function ObtenerUsuario() {
  const result = await axios.get("http://localhost:3000/api/usuario");
  //console.log(result.data);
  return result.data;
}

export async function CrearUsuario(
  usuario: Omit<Usuario, "id_usuario" | "puntos">
) {
  const result = await axios.post("http://localhost:3000/api/usuario", usuario);
  //console.log(result.data);
  return result.data;
}

export async function ActualizarUsuario(
  usuario: Omit<Usuario, "id_usuario">,
  id: number
) {
  const result = await axios.put(
    `http://localhost:3000/api/usuario/${id}`,
    usuario
  );
  //console.log(result.data);
  return result.data;
}

export async function EliminarUsuario(id: number) {
  const result = await axios.delete(`http://localhost:3000/api/usuario/${id}`);
  //console.log(result.data);
  return result.data;
}
