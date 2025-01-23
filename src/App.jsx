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
        <CartProduct/>

      </div>
      <div className='footer-container'>

      </div>
    </div>
  )
}

export default App
