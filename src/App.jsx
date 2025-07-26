import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import JokesPage from "./JokesPage";

function App() {
  return (
    <Router basename="/react">
      <Routes>
        <Route path="/hindijokes/:slug" element={<JokesPage csvFile="1.csv" />} />
        <Route path="/englishjokes/:slug" element={<JokesPage csvFile="2.csv" />} />
        <Route path="*" element={<h2 style={{ textAlign: "center", padding: "2rem" }}>😂 Jokes from CSV</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
