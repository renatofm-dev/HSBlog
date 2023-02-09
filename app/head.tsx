

import { Analytics } from "../components/Analytics";


export default function Head() {
  return (
    <>
      <title>HSBlog</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Blog Informativo da Holding System Brazil. Oferecemos soluções completas em holdings familiares para proteção de bens e maximização de lucros da sua família." />

      {/* <!-- Primary Meta Tags --> */}
      <title>HSBlog - Principal portal de informações sobre Holdings Patrimoniais</title>
      <meta name="title" content="HSBlog - Principal portal de informações sobre Holdings Patrimoniais" />
      <meta name="description" content="Blog Informativo da Holding System Brazil. Oferecemos soluções completas em holdings familiares para proteção de bens e maximização de lucros da sua família." />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hsblog.com.br/" />
      <meta property="og:title" content="HSBlog - Principal portal de informações sobre Holdings Patrimoniais" />
      <meta property="og:description" content="Blog Informativo da Holding System Brazil. Oferecemos soluções completas em holdings familiares para proteção de bens e maximização de lucros da sua família." />
      <meta property="og:image" content="../public/assets/hsblog-share.png" />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hsblog.com.br/" />
      <meta property="twitter:title" content="HSBlog - Principal portal de informações sobre Holdings Patrimoniais" />
      <meta property="twitter:description" content="Blog Informativo da Holding System Brazil. Oferecemos soluções completas em holdings familiares para proteção de bens e maximização de lucros da sua família." />
      <meta property="twitter:image" content="../public/assets/hsblog-share.png"/>
    </>

  )
}
