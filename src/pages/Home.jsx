import { useState } from "react"
import { BackgroundStars } from "../BackgroundStars"



export const Home = ({setStep}) => {
  const [rain, setRain] = useState(false)

  const start = async (index) => {
    setRain(true)
    await new Promise(r => setTimeout(r, 800));
    setRain(false)

    setStep(2)
  }


  return (

    <> 

    <BackgroundStars rain={rain} />

    <div className="relative min-h-screen overflow-hidden">

     <main className=" relative container mx-auto px-4 py-10 flex justify-center items-center text-center min-h-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <section id="home" className="my-10 max-w-2xl">
         <h2 className="star7-font text-6xl font-extrabold mb-6 animate-fadeIn">Bienvenido a EcoChallenge Kids</h2>
         <p className="mb-10 text-lg leading-relaxed animate-fadeIn">Explora mapas, animaciones e información interactiva sobre la tierra y los últimos datos proporcionados por la NASA.</p>
        

         <a onClick={() => start()} className="cursor-pointer rounded-xl text-wrap space-font text-xl font-light px-6 py-2  bg-white hover:bg-black text-black hover:text-white hover:rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg">
        Comencemos 🚀
        </a>
       </section>
       
     </main>

   </div>

    </>
   )
}

