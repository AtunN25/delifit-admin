import axios from "axios";

export async function ObtenerUsuario() {
  const result = await axios.get("http://localhost:3000/api/usuario");
  console.log(result.data);
  return result.data;
}

interface Usuario {
  nombre: string;
  apellido: string;
  img_url: string;
  documento: string;
  tipo_doc: string;
}

export async function CrearUsuario(usuario: Usuario) {
  const result = await axios.post("http://localhost:3000/api/usuario", usuario);
  console.log(result.data);
  return result.data;
}

export async function ActualizarUsuario(usuario: Usuario, id: number) {
  const result = await axios.put(
    `http://localhost:3000/api/usuario/${id}`,
    usuario
  );
  console.log(result.data);
  return result.data;
}

export async function EliminarUsuario(id: number) {
  const result = await axios.delete(`http://localhost:3000/api/usuario/${id}`);
  console.log(result.data);
  return result.data;
}
