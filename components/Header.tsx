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
        <h1 className="text-lg">HSBlog</h1>
      </div>

      <div>
        <Link
        href='https://holdingsystem.com.br'
        className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
      >
        Contrate Agora
      </Link>
      </div>
    </header>
  )
}

export default Header