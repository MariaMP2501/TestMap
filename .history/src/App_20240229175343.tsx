import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Estimation from './components/Estimation';

const appStyle = {
  margin: 0,
};

function App() {
  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route path="/estimation" element={<Estimation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
