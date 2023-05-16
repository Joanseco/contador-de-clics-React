import './App.css';
import logo from './imagenes/js.png';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador';
import { useState } from 'react';

//importo las librerias necesarias y que voy a usar


//creo la funcion app y dos variables
function App() {

  //uso el Hook de useState que cambiara el estado a la constante y su parametro inicial en (0)
  const [numClics, setNumClics] = useState(0);

  //esta constante incrementara el valor una vez se haga click, ya que la pasare como parametro más abajo
  const manejarClic = () => {
    setNumClics (numClics + 1);
  }

  //esta constante resetea el valor a 0, una vez se haga click
  const reiniciarContador = () => {
    setNumClics (0);
  }

//lo que le voy a retornar a la App sera los div, y los componentes a editados()
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
