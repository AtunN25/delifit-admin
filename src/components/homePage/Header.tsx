import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className="w-full h-screen bg-red-400 "
      style={{
        backgroundImage:
          "url('https://scontent.flim6-3.fna.fbcdn.net/v/t39.30808-6/301267682_740102144089101_8804719295285433950_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QzRYTY0eHr4Q7kNvgHvLDUD&_nc_ht=scontent.flim6-3.fna&oh=00_AYCauxzS9jgVt-kCF046rkxC-n1ocyIcoeU2azV4SZY3NA&oe=665BF344')",
      }}
    >
      <div className="bg-white rounded shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <img
              className="cursor-pointer hover:scale-150"
              src="https://scontent.ftcq2-1.fna.fbcdn.net/v/t39.30808-6/273382613_902045517139629_3664457121212109806_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8E9lHdsYMEwQ7kNvgF__z26&_nc_ht=scontent.ftcq2-1.fna&oh=00_AYAa3FJ2mpbzG3ModbjQjwdvdc2FTg7MeEoUywVGTR0ykw&oe=665C5157"
              alt="Logo Delifit"
              width="34"
              height="34"
            />
            <h2 className="font-normal text-2xl leading-6 text-gray-800">
              Delifit
            </h2>
          </div>

          <ul className="hidden md:flex flex-auto space-x-2">
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  text-gray-600 bg-white cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:bg-indigo-700 hover:text-white">
              Carta General
            </li>
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:bg-indigo-700 hover:text-white">
              Carta Personalizable
            </li>
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:bg-indigo-700 hover:text-white">
              Promociones
            </li>
            <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:bg-indigo-700 hover:text-white">
              Otra opcion...
            </li>
          </ul>

          <div className=" flex space-x-5 justify-center items-center pl-2">
            <div className="text-black flex items-flex relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
              <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white border border-white bg-lime-700 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded hover:scale-110 hover:bg-lime-500 hover:text-black">
                Login
              </div>

              <div className="animate-ping w-1.5 h-1.5 bg-lime-500 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
              <div className=" w-1.5 h-1.5 bg-lime-500 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
            </div>

            <svg
              className="w-6 h-6 text-gray-800 dark:text-black hover:scale-125 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            {/*<button className="">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/menu--v1.png"
              alt="menu--v1"
            />
    </button>*/}
             <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/menu--v1.png"
                alt="menu--v1"
              />
            </button>
          </div>
         
        </nav>
        {isMenuOpen && (
          <div className="flex flex-col mt-4 space-y-2 md:hidden fixed bg-white right-0">
            <a
              href="#"
              className="text-gray-600 bg-white cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:bg-indigo-700 hover:text-white"
            >
              Carta General
            </a>
            <a
              href="#"
              className="text-gray-600 bg-white cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:bg-indigo-700 hover:text-white"
            >
              Carta Personalizable
            </a>
            <a
              href="#"
              className="text-gray-600 bg-white cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:bg-indigo-700 hover:text-white"
            >
              Promociones
            </a>
            <a
              href="#"
              className="text-gray-600 bg-white cursor-pointer px-3 py-2.5 font-semibold text-xs leading-3 shadow-md rounded hover:bg-indigo-700 hover:text-white"
            >
              Otra opción...
            </a>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center flex-grow justify-center h-5/6">
        <h1 className="font-bold text-5xl text-white">ENGRIETE SALUDABLE</h1>
        <br></br>
        <h2 className="font-bold text-3xl text-white">
          Disfruta la aventura de comer delicioso y saludable
        </h2>
        <br></br>
        <div className="space-x-6">
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white border border-lime-600 bg-lime-600 cursor-pointer px-3 py-2.5 font-semibold hover:scale-110 text-xs leading-3 shadow-md rounded">
            Ver platos y postres
          </button>
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-semibold hover:scale-110text-xs leading-3 shadow-md rounded hover:scale-110">
            Quiero pedir!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
