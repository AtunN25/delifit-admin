"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FormCreate } from "./FormCreate";
import { FormUpdate } from "./FormUpdate";

interface FormUpgradeProps {
  title: string;
  description: string;
  action: "Create" | "Update";
  children: React.ReactNode;
}

export function DialogCard({
  title,
  description,
  action,
  children,
}: FormUpgradeProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {action === "Create" ? <FormCreate /> : null}
        {action === "Update" ? <FormUpdate /> : null}
      </DialogContent>
    </Dialog>
  );
}
