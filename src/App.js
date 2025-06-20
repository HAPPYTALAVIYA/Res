import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import Gallery from './Gallery';
import Res from './Res';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/res" element={<Res />} />
      </Routes>
    
    </>
  );
}

export default App;
