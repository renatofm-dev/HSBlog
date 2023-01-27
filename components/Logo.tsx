import Image from "next/image";
import LogoHsB from '../public/assets/logo-hsb192.png'

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
  <div className="flex items-center space-x-2">
    <Image
    className="rounded-full object-cover"
    height={50}
    width={50}
    src={LogoHsB}
    alt="Logo HSB"

    />
    {renderDefault && <>{renderDefault(props)}</>}
  </div>
  )
   
  
}

export default Logo