// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import ModulePage from './components/ModulePage/ModulePage';
import { Toaster } from 'react-hot-toast';

function App() {
  // State to manage the selected module
  const [selectedModule, setSelectedModule] = useState('');

  return (
    <Router>
      <div className="App">
        <Navbar setSelectedModule={setSelectedModule} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/module" element={<ModulePage selectedModule={selectedModule} />} />
        </Routes>
        <Toaster position="top-left" reverseOrder={false} />
      </div>
    </Router>
  );
}

export default App;
