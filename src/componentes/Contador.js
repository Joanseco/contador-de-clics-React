import React from "react";
import '../hojas-de-estilo/Contador.css';

//Otra forma de crerar el componente con otra estructura para el props seria
// function Contador({numClics})
//    <div  className='contador'>
//       {numClics}

function Contador(props){
  return(
    <div  className='contador'>
      {props.numClics}
    </div>
  );
}

export default Contador;