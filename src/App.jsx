// En react nunca se van a usar selecElementById
// import { useState } from 'react'
// event.preventDefault()
// event.stopPropagation()
// even. target repasar
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OtroBoton from "./OtroBoton";
import { useState } from "react";

/**function clickHandlerOut(event) { {Si la funcion se crea aduera de la funcion solo se crea una vez, pero si esta adentro, se crea el numero de veces que se renderiza 
console.log('click', event)
}*/

function App() {
  //const [count, setCount] = useState(0)
  function clickHandler(event) {
    {
      /**Recibe el evento para poder usar los metodos del event */
    }
    console.log("click", event);
  }
  const [counter, setCounter] = useState(0); /** No se puede actualizar el estado actualizando la variable counter */
  function avanzarContador() {
    setCounter(counter + 1);
  }

  console.log('Console log App')

  return (
    // Para crear un estado es necesaria la funcion. Deconstruir un arreglo. Estado numerico
    // const [password, setPassword] = useState('') string
    // cibsr [tareas, setTareas] = useState([]) array
    // consr [koder, setKoder] = useState({}) object
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={avanzarContador}>
          {/** Se crea una funcion con el evento onClick */}
          count is {counter}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <OtroBoton
        text="Hola soy otro boton"
        alClick={() => console.log("Al clickaso")}
      />
      <OtroBoton
        text="Soy otro boton mas"
        alClick={() => console.log("Este es un click mas")}
      />
    </>
  );
}

export default App;
