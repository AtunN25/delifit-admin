import Link from "next/link";

import Image from "next/image";

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
              href='/'
              className='group w-full shrink-0 flex items-center justify-center'
            >
              <Image
                src='/delifit-logo.svg'
                alt='Delifit'
                width={320}
                height={320}
                className='transition-all group-hover:scale-110'
              />
              <span className='sr-only'>Delifit Admin</span>
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
