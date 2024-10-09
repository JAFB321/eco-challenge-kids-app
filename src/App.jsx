import { useState } from 'react';
import './App.css'
import './background-stars.css'
import './font.css'
import { Navbar } from './Navbar';
import { HagamosConciencia } from './pages/HagamosConciencia';
import { Home } from './pages/home';
import { Divirtamonos } from './pages/Divirtamonos';
import { Exploremos } from './pages/Exploremos';
import { SigueCreciendo } from './pages/SigueCreciendo';

const App = () => {

  const [step, setStep] =  useState(1)




  return (

    <>
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

    </>
    
  );
};
export default App