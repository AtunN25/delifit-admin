import { columns } from "./Columns";
import { DataTable } from "./DataTable";
import { Insumo } from "@/types/db";
import { ObtenerInsumo } from "@/data/Insumo";

async function getData(): Promise<Insumo[]> {
  const result = await ObtenerInsumo();

  return result as Insumo[];
}

export default async function SectionInsumo() {
  const data = await getData();
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
