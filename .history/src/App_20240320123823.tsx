import "./App.css"
import { IntlProvider } from 'react-intl';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Section1 from './components/Section1';
import Estimation from "./components/Estimation";

const appStyle = {
  margin: 0,
};

function App() {
  return <>
  <Navbar/>
  <Estimation/>
  <Footer/>
  </>;
}

export default App;
