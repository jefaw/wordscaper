import React from 'react';
import FetchWords from './components/FetchWords'
import { useState } from 'react';
import './App.css';

function App() {
  
  const [words, setWords] = useState(["none"]);
  const [userInput, setUserInput] = useState('');

  const newRequest = async() =>{ // after first render
    setWords("Requesting...");
    //const url = "https://api.datamuse.com/words?ml=spoon&sp=*a&max=10";
    const url = "https://api.datamuse.com/words?sp=//" + userInput;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    let w = []
    for(let i=0;i<data.length;i++){
        w[i] = data[i]['word'];
        console.log(i + data[i]['word']);
    }
    setWords(w);
  };
  const changeInput = (newInput) => {
    setUserInput(newInput)
  };
  
  return (    
    <div className="App">
      <header className="App-header">
        <h1> Wordscaper</h1>
        <button>4 letter</button>
        <button>5 letter</button>
        <button>6 letter</button>
        <button>7 letter</button>
        <FetchWords onSubmit={newRequest} words={words} onChange={changeInput}/>
        
        
      </header>
    </div>
  );
}

export default App;
