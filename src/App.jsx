import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

//Componentes
import { Navbar } from "./components/Navbar";
import { CardProduct } from "./components/CardProducts/CardProducts";

//Datos
import serviciosFisioterapia from "../data";

//Páginas

import { HomePage } from "./components/Pages/Home";
import { AboutMe } from "./components/Pages/AboutMe";
import { Contact } from "./components/Pages/Contact";
import { CardProductsList } from "./components/CardProducts/CardProductsList";
import { ProductDetails } from "./components/CardProducts/ProductDetails";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/CardProductsList" element={<CardProductsList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//De momento usaremos servicesNavbar para enviar a serivicios, depués haremos que se divida por categorias