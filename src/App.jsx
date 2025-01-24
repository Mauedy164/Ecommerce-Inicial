import './App.css'
import { Nabvar } from './components/Navbar'
import { CartProduct } from './components/CartProducts'
import serviciosFisioterapia from '../data';

function App() {
  const list = serviciosFisioterapia.map(({id, image,
    title,description,duration,objetive,technique,benefits,price,category}) => 
    <CartProduct 
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
