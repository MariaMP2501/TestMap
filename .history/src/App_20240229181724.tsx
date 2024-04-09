import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resacard from './components/Resacard';
import './index.css';
// import { StepProgressBar } from './components/StepProgressBar';
// import { CommandCard } from './components/CommandCard';
import Estimation from './components/Estimation';
import { StepProgressBar } from './components/StepProgressBar';

const appStyle = {
  margin: 0,
};

function App() {
  return (
    <Router>
      <div style={appStyle}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Resacard/>
          <Footer />
                
              </>
            }
          />
          <Route path="/estimation" element={<Estimation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
