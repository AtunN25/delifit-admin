import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Usuario } from "@/types/model";
import { ObtenerUsuario } from "@/data/Usuario";

async function getData(): Promise<Usuario[]> {
  const result = await ObtenerUsuario();
  return result.data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className='container mx-auto py-10'>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
