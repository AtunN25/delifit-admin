import { BarraLateral } from "@/components/dashboard/BarraLateral";
import { Header } from "@/components/dashboard/Header";

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

const mySectionLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Home />,
  },
  {
    name: "Usuarios",
    href: "/dashboard/usuarios",
    icon: <Users2 />,
  },
  {
    name: "Productos",
    href: "/dashboard/productos",
    icon: <ShoppingBag />,
  },
  {
    name: "Insumos",
    href: "/dashboard/insumos",
    icon: <ShoppingBasket />,
  },
  {
    name: "Promociones",
    href: "/dashboard/promociones",
    icon: <TicketPercentIcon />,
  },
  {
    name: "Ventas",
    href: "/dashboard/ventas",
    icon: <ShoppingCart />,
  },
];

const myConfigLinks = [
  {
    name: "Configuración",
    href: "/dashboard/configuracion",
    icon: <Settings />,
  },
  {
    name: "Ayuda",
    href: "/dashboard/ayuda",
    icon: <CircleHelpIcon />,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <BarraLateral
        sectionLinks={mySectionLinks}
        configLinks={myConfigLinks}
      />
      <div className='flex flex-col sm:gap-4 sm:pl-14'>
        <Header
          sectionLinks={mySectionLinks}
          configLinks={myConfigLinks}
        />
        {children}
      </div>
    </section>
  );
}
