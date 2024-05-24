export interface Usuario {
  id_usuario: string | number;
  nombre: string;
  apellido: string;
  telefono: string;
  documento: string;
  tipo_doc: "DNI" | "CI" | "Pasaporte" | "Otros";
  puntos: number;
  img_url: string;
  fecha_registro: Date;
  validacion: boolean;
}
