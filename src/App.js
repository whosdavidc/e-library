import logo from './logo.svg';
import './App.css';
import Catalogue from './components/Catalogue/Catalogue';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 className="logo">
          <p>VENDOTODO</p>
          <p>MEVOYALAMERDA</p>
        </h1>
      </header>

      <div className="main-container">
        <Catalogue/>
      </div>
    </div>
  );
}

export default App;
