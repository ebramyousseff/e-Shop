import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { useState } from 'react'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import ProductDetails from './pages/ProductDetails'


function App() {
const [order, setOrder] = useState(null)
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>
      <Route path='/order-confirmation' element={<Order order={order}/>}/>
      <Route path='/filter-data' element={<FilterData/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
