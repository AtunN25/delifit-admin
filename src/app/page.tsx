"use client";

import Header from "../components/homePage/Header";
import AboutDelifit from "../components/homePage/AboutDelifit";
import Function from "../components/homePage/Function";
import Contact from "../components/homePage/Contact";

export default function Home() {
  console.log("Home");
  return (
    <main className='bg-white flex min-h-screen flex-col justify-between w-full'>
      <Header />
      <AboutDelifit />
      <Function />
      <Contact />
    </main>
  );
}
