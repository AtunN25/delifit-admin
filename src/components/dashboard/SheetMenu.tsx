import Link from "next/link";

import { Package2, PanelLeft } from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import React from "react";

interface HeaderProps {
  sectionLinks: {
    name: string;
    href: string;
    icon: React.ReactNode;
  }[];
  configLinks: {
    name: string;
    href: string;
    icon: React.ReactNode;
  }[];
  children: React.ReactNode;
}

export function SheetMenu({
  sectionLinks,
  configLinks,
  children,
}: HeaderProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side='left'
        className='sm:max-w-xs'
      >
        <SheetHeader>
          <SheetTitle>
            <Link
              href='#'
              className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
            >
              <Package2 className='h-5 w-5 transition-all group-hover:scale-110' />
              <span className='sr-only'>Acme Inc</span>
            </Link>
          </SheetTitle>
          <SheetDescription>Explore la opciones de navegación</SheetDescription>
        </SheetHeader>
        <nav className='grid gap-6 text-lg font-medium my-10'>
          {sectionLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
        <Separator />
        <nav className='grid gap-6 text-lg font-medium my-10'>
          {configLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
        <SheetFooter>
          <SheetClose>
            <Button className='w-full'>Cerrar Menu</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
