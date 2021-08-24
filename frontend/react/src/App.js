import logo from './logo.svg';
import './App.css';
import Primeiro from './Primeiro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!
        </a>
        <Primeiro 
          titulo="Titulo Alterado"
        />
        <Primeiro 
          titulo="Titulo 2"
          sub="sub1"
        />
        <Primeiro 
          titulo="Diferente"
        />
      </header>
    </div>
  );
}

export default App;
