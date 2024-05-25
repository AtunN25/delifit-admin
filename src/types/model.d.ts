export interface Venta {
  id_factura: string | number;
  fecha_emision: Date;
  nombre: string;
  cantidad: number;
  total: number;
}