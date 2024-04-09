import "./App.css"
import { IntlProvider } from 'react-intl';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Section1 from './components/Section1';
import Section2 from "./components/Section2";

const appStyle = {
  margin: 0,
};

function App() {
  return <>
  <Navbar/>
  <Section1/>
  <Section2/>
  {/* <Footer/> */}
  </>;
}

export default App;
