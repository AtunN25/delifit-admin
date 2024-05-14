export interface Usuario {
  id_usuario: string;
  nombre: string;
  apellido: string;
  telefono: string;
  documento: string;
  tipo_doc: "DNI" | "CI" | "Pasaporte" | "Otros";
  puntos: number;
  img_url: string;
}
