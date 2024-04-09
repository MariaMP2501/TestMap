import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Section1 from './components/Section1';
import { StepProgressBar } from "./components/StepProgressBar";

const appStyle = {
  margin: 0,
};

function App() {
  return <>
  <Navbar/>
  <StepProgressBar/>
  <Section1/>
  <Footer/>
  </>;
}

export default App;
