import logo from './logo.svg';
import './App.css';

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
         Hi. Welcome to Monika's project
        </a>
        <ul>
  <li><a href="/app1">Vyapaar </a></li>
  <li><a href="/app2">Sales</a></li>
</ul>
      </header>
    </div>
  );
}

export default App;
