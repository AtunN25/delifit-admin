import React from "react";

function AboutDelifit() {
  return (
    <div className="w-full md:h-screen  grid md:grid-cols-2 p-2">
      <div className="md:p-20 hidden md:block">
        <img
          src="  https://scontent.ftcq2-1.fna.fbcdn.net/v/t39.30808-6/369336715_18243056587233036_3780521405268373366_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LwQpLVv8hi8Q7kNvgHQC3SM&_nc_ht=scontent.ftcq2-1.fna&oh=00_AYBuUFAM7aF7hhKHIbMendzKd15SLvAPgnEY_HgTAChcjQ&oe=665C30D7"
          alt="Descripción de la imagen"
          className="mx-auto my-4 rounded-md"
        />
      </div>
      <div className="flex md:justify-center md:items-center md:h-screen">
        <div className="max-w-lg p-7">
          <h1 className="text-lime-700 text-3xl text-center underline">
            Delifit
          </h1>
          <br></br>
          <p className="text-shadow text-black text-justify">
            En DELIFIT po casi cinco años, hemos sido el sabor saludable de
            Tacna, ofreciendo opciones frescas y nutritivas.Desde desayunos
            energizantes hasta postres tentadores,cada plato resalta por sus
            ingredientes naturales y calidad insuperable.
          </p>
          <br></br>
          <p className="text-shadow text-black text-justify">
            Como un referente culinario en la region , nos enorgullece haber
            nutrido y deleitado a los tacneños y visitantes con nuestra
            dedicacion a la frescura y excelencia culinaria
          </p>
          <br></br>
          <p className="text-shadow text-black text-justify">
            Celebramos el equilibrio entre el buen comer y la salud,
            agradeciendo a todos quienes nos han acompañado en este viaje hacia
            na vida mas saludable y deliciosa en Tacna.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutDelifit;
