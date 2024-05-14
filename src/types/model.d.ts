enum TipoDocumento {
  DNI = "DNI",
  CI = "CI",
  PASAPORTE = "Pasaporte",
  OTRO = "Otro",
}

export interface Usuario {
  img_url: string;
  id_usuario: number;
  nombre: string;
  apellido: string;
  documento: string;
  tipo_doc: TipoDocumento;
  puntos: number;
}
