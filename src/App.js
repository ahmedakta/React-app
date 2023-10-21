import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Ahmet"
  const surname = "Akta"
  const age = 20
  const career = 'Programmer'
  return (
    <div className="App">
      <h1>{name}</h1>
        <p>
          {name} React Project
        </p>
        {name} is : 
        <ul>
          <li>
            {career}
          </li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
