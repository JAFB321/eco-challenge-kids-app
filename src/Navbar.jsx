export const Navbar = ({setStep, step}) => {
    return (
      <header className="h-14 z-50 bg-white text-black shadow-md">
        <div className="container mx-auto px-4 py-1 flex justify-center items-center">
          <nav className="flex space-x-6 font-sans">
            <a onClick={() => setStep(1)} className={`bg-white ${step === 1 && ' !bg-black text-white '} cursor-pointer text-wrap space-font text-xl font-light px-6 py-2   hover:bg-black hover:text-white rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg`}>Inicio</a>
            <a onClick={() => setStep(2)} className={`bg-white ${step === 2 && ' !bg-black text-white'} cursor-pointer text-wrap space-font text-xl font-light px-6 py-2   hover:bg-black hover:text-white rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg`}>Hagamos conciencia</a>
            <a onClick={() => setStep(3)} className={`bg-white ${step === 3 && ' !bg-black text-white'} cursor-pointer text-wrap space-font text-xl font-light px-6 py-2   hover:bg-black hover:text-white rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg`}>Divirtamonos</a>
            <a onClick={() => setStep(4)} className={`bg-white ${step === 4 && ' !bg-black text-white'} cursor-pointer text-wrap space-font text-xl font-light px-6 py-2   hover:bg-black hover:text-white rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg`}>Exploremos</a>
            <a onClick={() => setStep(5)} className={`bg-white ${step === 5 && ' !bg-black text-white'} cursor-pointer text-wrap space-font text-xl font-light px-6 py-2   hover:bg-black hover:text-white rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg`}>Sigue creciendo</a>
          </nav>
        </div></header>
    );
  };