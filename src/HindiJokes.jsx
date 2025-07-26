import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import JokeList from './JokeList';

export default function HindiJokes() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    Papa.parse('/react/1.csv', {
      download: true,
      header: false,
      complete: (result) => setJokes(result.data.flat().filter(j => j.trim()))
    });
  }, []);

  return <JokeList jokes={jokes} title="Hindi Jokes" />;
}
