import { Command, Moon, SunMedium } from "lucide-react";
import {
  // dashboard
  Home,
  // usuarios
  Users2,
  // productos
  ShoppingBag,
  // insumos
  ShoppingBasket,
  // promociones
  TicketPercentIcon,
  // ventas
  ShoppingCart,
  // configuracion
  Settings,
  // ayuda
  CircleHelpIcon,
} from "lucide-react";

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  logo: Command,
  sun: SunMedium,
  moon: Moon,
  // Iconos de Header

  // Iconos de Navegacion Barra Lateral
  dashboard: Home,
  usuarios: Users2,
  productos: ShoppingBag,
  insumos: ShoppingBasket,
  promociones: TicketPercentIcon,
  ventas: ShoppingCart,
  configuracion: Settings,
  ayuda: CircleHelpIcon,
};

export const Icons: IconsType = icons;
