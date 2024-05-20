import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './components/Contact'
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import OurServices from './components/OurServices'
import ServiceDetails from './components/ServiceDetails';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCart from "./components/AddCart"
import Buy from './components/Buy';



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/api/service/fetchAllServices' element={<OurServices />} />
          <Route path='/servicedetails' element={<ServiceDetails />} />
          <Route path='/cart' element={<AddCart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Navbar />
      </BrowserRouter>

    </>


  );
}

export default App
