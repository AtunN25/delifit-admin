import Image from "next/image";

export default function Home() {
  console.log("Home");
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        Pagina Principal
      </div>
      <h1>Queque</h1>
      <Image
        src='/producto/queque.jpg'
        alt='Queque'
        width={500}
        height={500}
        className='rounded'
      />
    </main>
  );
}
