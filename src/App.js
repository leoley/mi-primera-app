import logo from './logo.svg';
import './App.css';

import SaludoButton from './components/SaludoButton';

export default function App() {


  const user = {
    nombre: "",
    edad: 99,
    color: "azul"
  }


  const saludarFN = (name, edad) => {
    console.log("Hola " + name + "tiene" + edad + "años")
    console.log(`Hola ${name}, tiene ${edad}`)
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <SaludoButton
          userInfo={user}
          saludarFn={saludarFN}>
        </SaludoButton>

      </header>
    </div>
  );
}

