import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const JokesPage = ({ csvFile }) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/${csvFile}`)
      .then(response => response.text())
      .then(text => {
        Papa.parse(text, {
          complete: (results) => {
            const flatJokes = results.data.flat().filter(joke => joke.trim() !== "");
            setJokes(flatJokes);
          }
        });
      });
  }, [csvFile]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>😂 Jokes from CSV</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem"
        }}
      >
        {jokes.map((joke, index) => (
          <pre
            key={index}
            style={{
              background: "white",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              whiteSpace: "pre-wrap",
              fontFamily: "inherit"
            }}
          >
            {joke}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default JokesPage;
