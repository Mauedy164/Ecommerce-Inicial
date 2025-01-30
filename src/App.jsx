import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

//Componentes
import { Nabvar } from './components/Navbar'
import { CardProduct } from './components/CardProducts/CardProducts'

//Datos
import serviciosFisioterapia from '../data';

//Páginas

import { HomePage } from './components/Pages/Home';
import { AboutMe } from './components/Pages/AboutMe';
import {Contact} from './components/Pages/Contact';

function App() {
  const list = serviciosFisioterapia.map(({id, image,
    title,description,duration,objetive,technique,benefits,price,category}) => 
    <CardProduct 
    id={id}
    image={image}
    title= {title}
    description={description}
    duration={duration}
    objetive={objetive}
    technique={technique}
    benefits={benefits}
    price={price}
    category={category}
    />)

  return (
    
    <div className='complete-page'>
      <div className='navbar-container'>
        <Nabvar/>
      </div>
      <div className='products-main-container'>
        {list}

      </div>
      <div className='footer-container'>

      </div>
    </div>
  )
}

export default App
