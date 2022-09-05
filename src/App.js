import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
import SaludoPeruano from './components/SaludoPeruano';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
      <SaludoPeruano name="Lionard" edad="33"/>
      <SaludoPeruano name="Ale" edad="27"/>
      </header>
    </div>
  );
}

export default App;
