import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HindiJokes from './HindiJokes';
import EnglishJokes from './EnglishJokes';

export default function App() {
  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h1>Joke Website</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/hindijokes/best funny joke">Hindi Jokes</Link> |{" "}
        <Link to="/englishjokes/best funny joke">English Jokes</Link>
      </nav>
      <Routes>
        <Route path="/hindijokes/best funny joke" element={<HindiJokes />} />
        <Route path="/englishjokes/best funny joke" element={<EnglishJokes />} />
      </Routes>
    </div>
  );
}
