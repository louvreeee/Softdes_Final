import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nigga from './nigga'; // Assuming your component is in a file named "nigga.js"
import Sched from './sections/Sched';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nigga />} />
        <Route path="/Sched" element={<Sched />} />
        {/* Define more routes for other components as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
