import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResaCard from './components/ResaCard'; // Importez le composant ResaCard ici
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
          <Route
            path="/"
            element={
              <>
                <ResaCard /> {/* Incluez ResaCard ici */}
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
