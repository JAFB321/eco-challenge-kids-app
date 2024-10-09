import { useEffect, useState } from 'react';
import './App.css'
import './background-stars.css'
import './font.css'
import { Navbar } from './Navbar';
import { HagamosConciencia } from './pages/HagamosConciencia';
import { Home } from './pages/home';
import { Divirtamonos } from './pages/Divirtamonos';
import { Exploremos } from './pages/Exploremos';
import { SigueCreciendo } from './pages/SigueCreciendo';
import { YoutubeApiContext }  from './context/YoutubeApiContext';

const App = () => {

  const [step, setStep] =  useState(1)
  const [youtubeApiReady, setYoutubeApiReady] = useState({ready: false})

  useEffect(() => {
    // Cargar la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    // Crear el reproductor una vez que la API esté lista
    window.onYouTubeIframeAPIReady = () => {
      setYoutubeApiReady({ready: true})
    };
  }, [])
  

  return (
    <>
      <YoutubeApiContext.Provider  value={youtubeApiReady}>
        <div className='relative'>

          <Navbar setStep={setStep} step={step}/>

          <div>
          {step === 1 ? (
            <Home setStep={setStep} />
          ) : step === 2 ? (
            <HagamosConciencia />
          ) : step === 3 ? (
            <Divirtamonos />
          ) : step === 4 ? (
            <Exploremos/>
          ) : (
            <SigueCreciendo />
          )}

          </div>
          
        </div>
      </YoutubeApiContext.Provider>
    </>
  );
};

export default App