import React from 'react';

export default function JokeList({ jokes, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {jokes.map((joke, index) => (
        <p key={index} style={{
          background: "#f9f9f9",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px",
          whiteSpace: "pre-wrap"
        }}>
          {joke}
        </p>
      ))}
    </div>
  );
}
