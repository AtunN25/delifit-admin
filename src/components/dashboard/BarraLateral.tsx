import Link from "next/link";
import { Package2 } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import React from "react";

interface BarraLateralProps {
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
}

export function BarraLateral({ sectionLinks, configLinks }: BarraLateralProps) {
  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
      <nav className='flex flex-col items-center gap-4 px-2 py-4'>
        <Link
          href='#'
          className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
        >
          <Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
          <span className='sr-only'>Acme Inc</span>
        </Link>
        {sectionLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                {link.icon}
                <span className='sr-only'>{link.name}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{link.name}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-4'>
        {configLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                {link.icon}
                <span className='sr-only'>{link.name}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{link.name}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </aside>
  );
}