import React, { useEffect, useState } from 'react'
import { HomePage } from './pages/Home/HomePage'
import { Routes , Route} from 'react-router-dom'
import axios from 'axios'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { Orders } from './pages/Orders/Orders'
import { Tracking } from './pages/tracking/Tracking'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const loadcart = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    };
  useEffect(() => {
    
      loadcart();
  }, [])
    
 return (
  <Routes>
    <Route index element={<HomePage cart={cart} loadCart={loadcart}/>} />
    <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadcart}/>} />
    <Route path='orders' element={<Orders cart={cart}/>} />
    <Route path='tracking' element={<Tracking/>} />
  </Routes>
    
  )
}

export default App
