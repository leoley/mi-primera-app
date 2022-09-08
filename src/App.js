import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SaludoButton from './components/SaludoButton';

export default function App() {
  //stateCar => valor del estado
  //setStateCar => Hago un set del valor
  const [stateCar, setStateCar] = useState(false)

  const user = {
    nombre: "",
    edad: 99,
    color: "azul"
  }

  const saludarFN = (name, edad) => {
    console.log("Hola " + name + "tiene" + edad + "años")
    console.log(`Hola ${name}, tiene ${edad}`)
  };

  const encenderApagar = () => {
    setStateCar(!stateCar)
  //  setStateCar(prevValue => !prevValue)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <SaludoButton
          userInfo={user}
          saludarFn={saludarFN}>
        </SaludoButton>

        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <button onClick={encenderApagar}>Encender</button>
      </header>
    </div>
  );
}

