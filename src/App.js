import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // Load CSV file from public folder
    fetch('/jokes.csv')
      .then(response => response.text())
      .then(csvText => {
        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        const jokeList = result.data.map(item => item.joke);
        setJokes(jokeList);
      });
  }, []);

  return (
    <div className="container">
      <h1>😂 Jokes from CSV</h1>
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}><pre>{joke}</pre></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
