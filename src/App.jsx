import './App.css'
import { Nabvar } from './components/Navbar'
import { CartProduct } from './components/CartProducts'

function App() {
  return (
    
    <div className='complete-page'>
      <div className='navbar-container'>
        <Nabvar/>
      </div>
      <div className='products-main-container'>
        <CartProduct
        title = 'Masaje relajante'
        objetive = 'Masaje perfecto para quien busque relajarse'
        technique = 'Movimientos suaves y largos'
        benefits= 'Reducción del estrés, mejora del sueño y relajación general'
        duration= '60 minutos'
        price='500'/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>

      </div>
      <div className='footer-container'>

      </div>
    </div>
  )
}

export default App
