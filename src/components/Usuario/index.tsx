import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Usuario } from "@/types/model";

async function getData(): Promise<Usuario[]> {
  // Fetch data from your API here.
  return [
    {
      id_usuario: "1",
      nombre: "John",
      apellido: "Doe",
      telefono: "123456789",
      documento: "12345678",
      tipo_doc: "DNI",
      puntos: 100,
      img_url: "https://example.com/john-doe.jpg",
    },
    {
      id_usuario: "2",
      nombre: "Jane",
      apellido: "Doe",
      telefono: "987654321",
      documento: "87654321",
      tipo_doc: "CI",
      puntos: 200,
      img_url: "https://example.com/jane-doe.jpg",
    },
    {
      id_usuario: "3",
      nombre: "Alice",
      apellido: "Smith",
      telefono: "555555555",
      documento: "11111111",
      tipo_doc: "Pasaporte",
      puntos: 300,
      img_url: "https://example.com/alice-smith.jpg",
    },
    {
      id_usuario: "4",
      nombre: "Bob",
      apellido: "Johnson",
      telefono: "444444444",
      documento: "22222222",
      tipo_doc: "Otros",
      puntos: 400,
      img_url: "https://example.com/bob-johnson.jpg",
    },
    {
      id_usuario: "5",
      nombre: "Charlie",
      apellido: "Brown",
      telefono: "333333333",
      documento: "33333333",
      tipo_doc: "DNI",
      puntos: 500,
      img_url: "https://example.com/charlie-brown.jpg",
    },
  ];
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
