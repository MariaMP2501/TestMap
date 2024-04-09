import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Footer from './components/Footer';
import Estimation from './components/Estimation';
import Resacard from './components/Resacard';
import './index.css';
import { StepProgressBar } from './components/StepProgressBar';
import { CommandCard } from './components/CommandCard';

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
                <Section1 />
                <StepProgressBar/>
                <CommandCard/>
               
               
                
        
                
                {/* <Resacard/> */}
                {/* <Section2 />
                <Section3 /> 
                 */}<Footer />
                
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
