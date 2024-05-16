import Image from "next/image";

import { PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import { SheetMenu } from "@/components/dashboard/SheetMenu";
import { IndexPage } from "@/components/dashboard/IndexPage";
import { InputSearch } from "@/components/dashboard/InputSearch";
import { OptionsAuth } from "@/components/dashboard/OptionsAuth";

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
}

export function Header({ sectionLinks, configLinks }: HeaderProps) {
  return (
    <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
      <SheetMenu
        sectionLinks={sectionLinks}
        configLinks={configLinks}
      >
        <Button
          size='icon'
          variant='outline'
          className='sm:hidden'
        >
          <PanelLeft className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetMenu>
      <IndexPage />
      <InputSearch />
      <OptionsAuth>
        <Button
          variant='outline'
          size='icon'
          className='overflow-hidden rounded-full'
        >
          <Image
            src='https://avatars.githubusercontent.com/u/94066746?v=4'
            width={36}
            height={36}
            alt='Avatar'
            className='overflow-hidden rounded-full'
          />
        </Button>
      </OptionsAuth>
    </header>
  );
}
