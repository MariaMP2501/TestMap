import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Section1 from './components/Section1';

const appStyle = {
  margin: 0,
};

function App() {
  return <>
      <Navbar style={{ zIndex: 4 }} />
  <Section1/>
  <Footer style={{ zIndex: 4 }} />
  </>;
}

export default App;
