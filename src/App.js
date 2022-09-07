import logo from './logo.svg';
import './App.css';

import SaludoButton from './components/SaludoButton';

export default function App() {


  const user = {
    nombre: "Pepe",
    edad: 99,
    color: "azul"
  }


  const saludarFN = name => {
    console.log("Hola" + name + "Lionard")
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

