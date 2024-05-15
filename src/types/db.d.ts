import { Stringifier } from "postcss";

export interface Usuario {
    id_usuario: string | number;
    nombre: string;
    apellido: string;
    telefono: string;
    documento: string;
    tipo_doc: "DNI" | "CI" | "Pasaporte" | "Otros";
    puntos: number;
    img_url: string;
  }

  export interface Personal {
    id_personal: string | number;
    img_url : string;
    nombre : string;
    apellido : string;
    telefono : string;
    password : string;
    documento : string;

    //ENUM
    tipo_doc : "";
    rol : "";
  }

  export interface Factura {
    id_factura : string | number;

    //foreign key
    id_personal : string | number;
    id_usuario : string | number;

    fecha_emision : Date;
    subtotal : number;
    desc_promocion : number;
    desc_puntos : number;
    impuesto : number;
    total : number;
  }

  export interface Lista_Promocion {
    id_promocion : string | number ;

    //foreign key
    id_factura : string | number;

    cantidad : number;
    precio_cantidad : number;
    nombre : string;
  }

  export interface Lista_Producto {
    id_factura : string | number;

    //foreign key
    id_producto : string | number;

    cantidad : number;
    precio_cantidad : number;
    nombre : string;
  }

  export interface Insumo {
    id_insumo : string | number;
    img_url : string;
    nombre : string;
    cantidad : number;

    //ENUM
    categoria : "";
    medida : "";
  }

  export interface Producto {
    id_produto : string | number;
    img_url : string;
    nombre : string;
    descripcion : string;
    precio_base : number;
    
    //ENUM
    categoria : "";
  }

  export interface Promocion {
    if_promocion : string | number;
    img_url : string;
    nombre : string;
    descripcion : string;
    precio_base : number;
    precio_oferta : number;
    estado_promocion : boolean;
    fecha_inicio : Date;
    fecha_fin : Date;
    
    //ENUM
    categoria : "";
    dia_promocion : "";
  }

  export interface Ins_Prod {
    id_insumo : string | number;
    id_producto :  string | number;
    cantidad : number;
  }

  export interface Prod_Prom {
    id_producto : string | number;
    id_promocion :  string | number;
    cantidad : number;
  }