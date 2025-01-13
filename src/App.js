import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Commands from './components/Commands';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Features />
              <Commands />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;