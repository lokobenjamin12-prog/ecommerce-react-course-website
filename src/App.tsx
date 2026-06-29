
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Checkout from './Pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDetails from './Pages/productDetails'

function App() {

  return (
    <AuthProvider>
      <div className="app">
      <Navbar /> 
      <Routes>
        <Route path="/" element={ <Home />} ></Route>
        <Route path="/auth" element={ <Auth />} ></Route>
        <Route path="/checkout"  element={ <Checkout />}></Route>
        <Route path="/products/:id"  element={ <ProductDetails />}></Route>
      </Routes>
    </div>
    </AuthProvider>
  )
}

export default App
