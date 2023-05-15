import './App.css';
import logo from './imagenes/js.png';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics (numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics (0);
  }


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={logo} alt='logo' />
        <h1>Contador de Clics</h1>
      </div>

    <div className='contenedor-principal'>
      
      <Contador
      numClics={numClics} />

      <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
      <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
    </div>

    </div>
  );
}

export default App;
