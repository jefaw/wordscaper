import React from 'react';
import FetchWords from './components/FetchWords'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Wordscaper</h1>
        <button>4 letter</button>
        <button>5 letter</button>
        <button>6 letter</button>
        <button>7 letter</button>
        <form>
        <input type="text" placeholder='Search letters here'></input>
        <input type="submit"></input>
        </form>
        <FetchWords />
        
      </header>
    </div>
  );
}

export default App;
