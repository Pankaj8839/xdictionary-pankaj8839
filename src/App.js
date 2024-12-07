import './App.css';
import { useState } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const Dictionary =
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  
  const handleClick = () => {
    let mean = "";
    Dictionary.forEach((item) => {
      if (item.word === word) {
        mean= item.meaning;
      }
    });
    mean= mean === "" ? "Word not found in the dictionary." : mean;
    setMeaning(mean);
  }
  
  return (
    <div className="App">
     <h1>Dictionary App</h1>
     <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder='Search for a word...'/>
     <button onClick={handleClick}>Search</button>
     <p>Definition:</p>
     <p>{meaning}</p>

    </div>
  );
}

export default App;
