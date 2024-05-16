import { columns } from "./Columns";
import { DataTable } from "./DataTable";
import { Usuario } from "@/types/model";
import { ObtenerUsuario } from "@/data/Usuario";

async function getData(): Promise<Usuario[]> {
  const result = await ObtenerUsuario();
  return result.data;
}

export default async function SectionUsuario() {
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
