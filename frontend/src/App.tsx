import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import AppLayout from './components/layouts/AppLayout'
import HomeLayout from './components/layouts/HomeLayout'
import Favorites from './pages/Favorites'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import OrdersPage from './pages/OrdersPage'
import SignupPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'
import CheckoutPage from './pages/CheckoutPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout/>}>
            <Route path='/' element={<Home />}/>
          </Route>
          <Route element={<AppLayout/>}>
            <Route path='/product' element={<ProductList />}/>
            <Route path='/product-detail' element={<ProductDetail/>} />
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/orders' element={<OrdersPage/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
          </Route>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
