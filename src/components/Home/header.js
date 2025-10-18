import React from "react"
import Fade from "react-reveal/Fade"
import hero from "../../images/homekonten.png"
import bgVideo from "../../images/bg.mp4"

const Header = () => {
  return (
    <Fade duration={2200}>
      {/* 🔹 Tambahkan min-h-screen agar section punya tinggi penuh */}
      <div className="relative w-full min-h-screen overflow-hidden rounded-xl flex items-center mt-[-10px]">
        
        {/* 🔹 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* 🔹 Overlay agar teks tetap kontras */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        {/* 🔹 Konten utama */}
        <div className="relative z-10 w-full max-w-7xl mx-auto lg:px-6 md:px-3 px-4 flex flex-col lg:flex-row gap-10 items-center lg:items-start mt-32">
          
          {/* Bagian teks */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h1 className=" text-4xl font-semibold text-white">
              PT. Youngil Leather Indonesia
            </h1>

            <h2 className="font-birthstone bg-gradient-to-r text-amber-500 bg-clip-text text-transparent text-6xl font-semibold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-4xl">
              “Give the best Leather for global brands”
            </h2>

            <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              PT Youngil Leather Indonesia sering dijuluki sebagai “pionir kulit berkualitas global” karena kemampuannya memproduksi berbagai jenis kulit premium dengan standar internasional, teknologi modern, dan komitmen tinggi terhadap lingkungan, sehingga menjadi pilihan utama brand fashion internasional.                
            </p>              
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/contact"
                  className="transition-all duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-amber-600 text-white hover:text-white border border-amber-600 hover:bg-transparent md:text-lg md:px-10"
                >
                  Contact Us
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-3 sm:mt-0 sm:ml-3">
                {/* <a
                  href="/about"
                  className="transition-all duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-white hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  Get To Know Us
                </a> */}
              </div>
            </div>
          </div>

          {/* Bagian gambar */}
          <div className="lg:w-1/2 my-4 flex lg:justify-end justify-center mt-[-100px]">
            <img
              className="rounded-xl w-auto h-full max-h-[500px] object-cover flex justify-center"
              src={hero}
              alt=""
            />
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header
