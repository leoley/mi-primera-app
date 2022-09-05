import logo from './logo.svg';
import './App.css';
import PropsObject from './components/PropsObject';

export default function App() {
  const userName = "Lionard Leyva"
  const edad = 33

  const user = {
    nombre: "Lionard Leyva",
    edad: 33,
    color: "azul"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       
        <PropsObject userInfo={user}></PropsObject>
      </header>
    </div>
  );
}

