import Image from "next/image";
import Link from "next/link";
import LogoHsB from '../public/assets/logo-hsb192.png'




function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href='/'>
          <Image
            src={LogoHsB}
            alt="logo Hsb"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <h1 className="text-xl">HSBlog</h1>
      </div>

      <div>
        <Link
        href='https://holdingsystem.com.br'
        className="relative inline-flex items-center justify-center px-6 py-3 text-xl font-semibold tracking-tighter text-white bg-gray-800 rounded-md group"
      >
        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#FFB30D] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
        <span className="absolute inset-0 w-full h-full bg-[#142D49] rounded-md "></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#FFB30D] rounded-md opacity-0 group-hover:opacity-100 "></span>
        <span className="relative text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-[#142D49] ">Contrate Agora</span>
      </Link>
      </div>

    </header>
  )
}

export default Header