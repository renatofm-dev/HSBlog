//import { Inter } from "@next/font/google"


// const inter = Inter ({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable:'--font-inter'
// })

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 ">
      <div>
        <h1 className="text-7xl mb-2">Holding System Blog</h1>
        <h2 className="mt-5 ">
          Bem-vindo ao Principal Portal de informações sobre{" "}
          <span className="underline decoration-2 decoration-[#142D49]">
          Holdings Patrimoniais 
          </span>{" "}
            do Brasil.
        </h2>
      </div>

      <p className=" mt-5 md:mt-2 text-gray-400 max-w-sm">
        Redução Tributária | Blindagem Patrimonial | Planejamento Sucessório & Muito mais
      </p>

    </div>
  )
}

export default Banner