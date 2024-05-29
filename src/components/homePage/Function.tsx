import React from "react";

function Function() {
  return (
    <div className="bg-lime-600 md:h-screen p-2 ">
      <h1 className="font-semibold text-4xl text-center py-6">
        ¿Como funciona?
      </h1>

      <div className="grid md:grid-cols-3 md:h-4/6 md:px-16 gap-5 md:gap-10  ">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto border-t-4 border-lime-900 ">
          <div className="flex items-center mb-4 h-1/5">
            <div className="bg-lime-700 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4">
              1
            </div>
            <h2 className="text-xl font-bold text-black">
              Elige tus platos y personalízalos
            </h2>
          </div>
          <div className="ml-16 h-3/5">
            <p className="text-gray-700 mb-4">
              Puedes elegir entre todos los platos y postres preparados con los
              mejores ingredientes.
            </p>
            <p className="text-gray-700 mb-4">
              Además de eso tendrá la opción de poder personalizar ciertos
              productos, logrando así una mejor experiencia de acuerdo a tus
              gustos.
            </p>
          </div>
          <div className="flex justify-center items-end">
            <button className="bg-white text-black border border-stone-700 px-4 py-2 rounded-sm flex items-center justify-center hover:bg-lime-800 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m2 0a2 2 0 00-2-2h-1V7a2 2 0 00-4 0v3H9a2 2 0 00-2 2m12 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m5 3h2"
                />
              </svg>
              Ver platos y precios
            </button>
          </div>
        </div>


        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto border-t-4 border-lime-900 ">
          <div className="flex items-center mb-4 h-1/5">
            <div className="bg-lime-700 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4">
              2
            </div>
            <h2 className="text-xl font-bold text-black">
              Realiza el pago y llena tus datos
            </h2>
          </div>
          <div className="ml-16 h-3/5">
            <p className="text-gray-700 mb-4">
              Dinos con quien tenemos el gusto de atender y poder hacer seguimiento de tu pedido.
            </p>
            <p className="text-gray-700 mb-4">
              Tendras la opcion de pago al contado,yape o lpin , asi que no dejes pasar mañana lo que puedes hacer hoy
            </p>
          </div>
          <div className="flex justify-center items-end">
            <button className="bg-white text-black border border-stone-700 px-4 py-2 rounded-sm flex items-center justify-center hover:bg-lime-800 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m2 0a2 2 0 00-2-2h-1V7a2 2 0 00-4 0v3H9a2 2 0 00-2 2m12 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m5 3h2"
                />
              </svg>
              Realizar Pago
            </button>
          </div>
        </div>



        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto border-t-4 border-lime-900 ">
          <div className="flex items-center mb-4 h-1/5">
            <div className="bg-lime-700 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4">
              3
            </div>
            <h2 className="text-xl font-bold text-black">
               ¡Listo! Disfruta y evaluanos
            </h2>
          </div>
          <div className="ml-16 h-3/5">
            
            <p className="text-gray-700 mb-4">
              Despreocupate de tus comidas para siempre y recibe puntualmente tus comidas recien cocinadas de tu preferencia en la puerta de tu casa o en nuestro propio local
            </p>
          </div>
          <div className="flex justify-center items-end">
            <button className="bg-white text-black border border-stone-700 px-4 py-2 rounded-sm flex items-center justify-center hover:bg-lime-800 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m2 0a2 2 0 00-2-2h-1V7a2 2 0 00-4 0v3H9a2 2 0 00-2 2m12 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m5 3h2"
                />
              </svg>
              Veropiniones
            </button>
          </div>
        </div>
      </div>
      <div className=" h-1/6 py-6 flex justify-center items-end space-x-5">
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-black border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:scale-110 ">
          ¡Quiero pedir!
        </button>
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-black border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:scale-110 ">
          Unete a nosotros
        </button>
      </div>
    </div>
  );
}

export default Function;
