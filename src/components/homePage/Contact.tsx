function contact() {
  return (
    <div>
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*grid */}
          <div className="py-14 grid grid-cols-12 gap-x-5 gap-y-8">
            <div className="col-span-full xl:col-span-3 relative bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-2xl gap-8 p-6 xl:w-72 h-96 flex flex-col justify-center items-center">
              <div className="flex space-x-4">
                <img
                  className="cursor-pointer"
                  src="https://scontent.ftcq2-1.fna.fbcdn.net/v/t39.30808-6/273382613_902045517139629_3664457121212109806_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8E9lHdsYMEwQ7kNvgF__z26&_nc_ht=scontent.ftcq2-1.fna&oh=00_AYAa3FJ2mpbzG3ModbjQjwdvdc2FTg7MeEoUywVGTR0ykw&oe=665C5157"
                  alt="Logo Delifit"
                  width="34"
                  height="34"
                />
                <h1 className="text-semibold text-2xl flex items-start justify-start">
                  Delifit
                </h1>
              </div>

              <p className="text-center text-gray-200">
                • ENGRÍETE SALUDABLE • Disfruta la aventura de comer delicioso y
                saludable
              </p>

              <div className="flex  space-x-4 sm:justify-center  ">
                <a
                  href="https://api.whatsapp.com/send/?phone=51917774573&text&type=phone_number&app_absent=0"
                  className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
                >
                  <img
                    width="22"
                    height="22"
                    src="https://img.icons8.com/ios/50/whatsapp--v1.png"
                    alt="whatsapp--v1"
                  />
                </a>

                <a
                  href="https://www.instagram.com/delifit.tacna/"
                  className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
                >
                  <img
                    width="22"
                    height="22"
                    src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                    alt="instagram-new--v1"
                  />
                </a>

                <a
                  href="https://www.facebook.com/delifit.tacna"
                  className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
                >
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/ios/50/facebook-new.png"
                    alt="facebook-new"
                  />
                </a>
              </div>
            </div>

            <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
              <h4 className="text-lg text-gray-900 font-bold mb-9">
                Contactanos
              </h4>
              <ul className="text-gray-900 transition-all duration-500 grid gap-6">
                <li>delifit.tacna@gmail.com</li>
                <li>+51 917 774 573</li>
                <li>
                  Intersección de calle deustua con calle zela - BULEVAR PLAZA,
                  Tacna, Peru
                </li>
              </ul>
            </div>

            <div className="block xl:py-16 col-span-full min-[500px]:col-span-8 md:col-span-6  ">
              <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">
                Horarios de atencion
              </h4>
              <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
                <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                  <li>Lunes-Viernes</li>
                  <li>Sabado</li>
                  <li>Domingos-solo delivery</li>
                  
                </ul>
                <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                  <li>9am-3pm & 5pm-9pm</li>
                  <li>
                    11am-3pm & 5pm-9pm
                  </li>
                  <li>
                    contacto
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          {/*grid */}
        </div>
        <div className="py-4 bg-indigo-50">
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-800 ">
              Copyright@2024 All Right Reserved by{" "}
              <a href="https://pagedone.io/">Delifit</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default contact;
