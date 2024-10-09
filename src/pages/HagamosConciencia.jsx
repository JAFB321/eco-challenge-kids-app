import { useEffect, useState } from "react";
import { EmbedYoutube } from "../components/EmbedYoutube";
import { useVideoControls } from "../hooks/useVideoControls";
import IMG_TEMPERATURA_GLOBAL from '../assets/temperatura_global.png'
import IMG_ESPACIO from '../assets/espacio.jpeg'
import IMG_INUNDACION from '../assets/inundacion.jpeg'

import { BackgroundStars } from "../BackgroundStars";

export const VideoHagamosConciencia = () => {
  const videoControls = useVideoControls();

  return (
    <div className="">
     

     <button
          className="mx-5"
            onClick={() => {
              console.log("run");
              videoControls.current.play();
            }}
          >
            run
          </button>

          <button
          className="mx-5"

            onClick={() => {
              console.log("stop");
              videoControls.current.pause();
            }}
          >
            pause
          </button>

          <button
          className="mx-5"

            onClick={() => {
              console.log("mute");
              videoControls.current.mute();
            }}
          >
            mute
          </button>

          <button
          className="mx-5"

            onClick={() => {
              console.log("unmute");
              videoControls.current.unMute();
            }}
          >
            unmute
          </button>

          <EmbedYoutube 
            className="h-full w-full"
            videoId="h1kB5ftB61I"
            controls={videoControls} />
    </div>
  );
};

const VideoCard = ({title, description, imgUrl, className, onClick, button = 'Ver video'}) => {
  return (<div className={`${className} bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
      
  <img className="rounded-t-lg w-full h-64 object-fill" src={imgUrl} alt="" />
  <div className="p-5">
      <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <a  
      onClick={() => onClick()}
       className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {button}
           <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
      </a>
  </div>
</div>)
}

export const HagamosConciencia = () => {
  const videoControls = useVideoControls();


  /** @type {'init' | 'play' | 'end'} */
  const status = useState('init')

  const [videoIndex, setVideoIndex] = useState(0)

  const videos = {
    1: 'h1kB5ftB61I',
    2: '5uuJf06jvnA',
  }
  const videoPlaying = videos[videoIndex]


  const [mapIndex, setMapIndex] = useState(0)

  const maps = {
    1: 'https://flood.firetree.net/?ll=27.9408,-111.0856&zoom=16&m=20&type=hybrid',
    2: 'https://flood.firetree.net/?ll=26.5881,-109.3347&zoom=15&m=20&type=hybrid',
  }
  const map = maps[mapIndex]
  

  const [rain, setRain] = useState(false)

  const startVideo = async (index) => {
    setRain(true)
    await new Promise(r => setTimeout(r, 800));
    setRain(false)

    setVideoIndex(index)
  }

  const exitVideo = async () => {
    setVideoIndex(0)
  }

  const openMap = async (index) => {
    setRain(true)
    await new Promise(r => setTimeout(r, 800));
    setRain(false)

    setMapIndex(index)
  }

  const VideoEmbed = () => ( 
    <>
    <div className={`absolute top-0 left-0 right-0 opacity-0 ${(videoIndex) ? 'opacity-100' : ''} duration-1000`}>
     <EmbedYoutube className="h-full w-full" videoId={videoPlaying} controls={videoControls} />

     <a onClick={() => exitVideo()} className=" absolute bottom-32 left-10  cursor-pointer text-wrap space-font text-xl font-light px-6 py-2  bg-white hover:bg-black text-black hover:text-white hover:rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg">
      Salir del video
      </a>

    </div>
    </>
  )

  const MapEmbed = () => {

    return (
      <div className={`absolute top-0 left-0 right-0 bottom-0 opacity-0 ${(mapIndex) ? 'opacity-100' : ''} duration-1000`}>
            <iframe
              src={map}
              title="Flood Map"
              width="100%"
              height="800px"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>

    <div className="pt-10 sticky bottom-0 left-10 flex justify-center gap-10 ">
    <a onClick={() => setMapIndex(1)} className=" rounded-xl  cursor-pointer text-wrap space-font text-xl font-light px-6 py-2  bg-white hover:bg-black text-black hover:text-white hover:rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg">
          San carlos, Sonora
          </a>

      <a onClick={() => setMapIndex(2)} className=" rounded-xl cursor-pointer text-wrap space-font text-xl font-light px-6 py-2  bg-white hover:bg-black text-black hover:text-white hover:rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg">
      Las bocas, Sonora
      </a>

      <a onClick={() => setMapIndex(0)} className=" rounded-xl cursor-pointer text-wrap space-font text-xl font-light px-6 py-2  bg-white hover:bg-black text-black hover:text-white hover:rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg">
        Salir
      </a>

</div>


        </div>
    )
  }

  return (
    <>
    <BackgroundStars rain={rain} />

      <div className={`relative max-w-screen-xl mx-auto ${(videoIndex || map || rain) ? 'opacity-0' : ''} duration-300`}>
        <div className="flex justify-center gap-x-10 max-w-6xl mx-auto mt-36">

          <VideoCard
            title={"Temperatura Global 🔥🌎"}
            description={
              "Veamos como el calentamiento global ha afectado la temperatura de nuestro planeta"
            }
            imgUrl={IMG_TEMPERATURA_GLOBAL}
            className={"w-[400px]"}
            onClick={() => startVideo(1)}
          />

          <VideoCard
            title={"Derretimiento de los polos 🧊"}
            description={
              "Veamos las consecuencias de que se derritan nuestras grandes reservas de hielo"
            }
            imgUrl={IMG_INUNDACION}
            button={"Ver mapa"}
            className={"w-[400px]"}
            onClick={() => openMap(1)}
          />

        <VideoCard
            title={"Huaracanes 🌪️"}
            description={
              "Otro fenomeno natural que afecta a millones cada año"
            }
            imgUrl={IMG_ESPACIO}
            className={"w-[400px]"}
            onClick={() => startVideo(2)}
          />

        
        </div>

      </div>
        {videoPlaying ? (
          <VideoEmbed />
        ) : (
          <></>
        )}

      {map ? (
            <MapEmbed/>
        ) : (
          <></>
        )}
    </>
  );
};
