import { BarraLateral } from "@/components/dashboard/BarraLateral";
import { Header } from "@/components/dashboard/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <BarraLateral />
      <div className='flex flex-col sm:gap-4 sm:pl-14'>
        <Header />
        {children}
      </div>
    </section>
  );
}
