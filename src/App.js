import React from 'react';
import FetchWords from './components/FetchWords'
import { useState } from 'react';
import './App.css';

function App() {
  
  const [words, setWords] = useState([]);
  const [userInput, setUserInput] = useState('');

  const newRequest = async() =>{ // after first render
    let w = []
    let shorterWords = new Set([]);
    let currentLen = userInput.length;
    let tempWord = userInput.slice();
    for (let i =0; i<currentLen;i++){
      shorterWords.add(tempWord.slice(0,i)+tempWord.slice(i+1))
    }
    
    const url = "https://api.datamuse.com/words?sp=//" + userInput;
    const response = await fetch(url);
    const data = await response.json();
    for(let i=0;i<data.length;i++){
        if (data[i]['score'] > 200) w[i] = data[i]['word'];
        console.log(i + data[i]['word']);
    }

    w.push("Shorter length words:");
    shorterWords.forEach(async (word) => {
      const url = "https://api.datamuse.com/words?sp=//" + word;
      const response = await fetch(url);
      const data = await response.json();
      for(let i=0;i<data.length;i++){
          if (data[i]['score'] > 200) w.push (data[i]['word']);
          console.log(i + data[i]['word']);
      }
      console.log(w);
      setWords([...w])
      console.log(words);
    })
  };
  const changeInput = (newInput) => {
    setUserInput(newInput)
  };
  
  return (    
    <div className="App">
      <header className="App-header">
        <h1> Wordscaper</h1>
        <p> Find Anagrams!</p>
        <FetchWords onSubmit={newRequest} words={words} onChange={changeInput}/>
        
      </header>
    </div>
  );
}

export default App;
