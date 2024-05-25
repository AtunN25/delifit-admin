import { columns } from "./Columns";
import { DataTable } from "./DataTable";
import { Venta } from "@/types/model";
import { ObtenerVenta } from "@/data/Venta";

async function getData(): Promise<Venta[]> {
  const result = await ObtenerVenta();
  return result.data;
}

export default async function SectionVenta() {
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
