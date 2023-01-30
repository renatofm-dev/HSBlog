import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return <div>
    <div className="flex items-center justify-between p-5">
      <Link  href='/' className="text-[#F7AB0A] flex items-center">
        <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
        Go to Website
      </Link>

      <div className="hidden md:flex p-2 rounded-lg justify-center border-2 border-[#F7AB0A] flex-col">
        <h1 className="font-bold text-white">Informações sobre Postagens e calendário</h1>
        <Link href="https://shrouded-handstand-9d4.notion.site/118d05b65d5b4bd6b0f72edb470de077?v=10d10e65be824f41955985b8e5d8d3b4" className="text-[#F7AB0A]">
          Calendário de Postagem & Posts
        </Link>
      </div>

    </div>
    <>{props.renderDefault(props)}</>
  </div>

}

export default StudioNavbar