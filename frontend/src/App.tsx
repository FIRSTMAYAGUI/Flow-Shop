import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import AppLayout from './layouts/AppLayout'
import HomeLayout from './layouts/HomeLayout'
import Favorites from './pages/Favorites'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import OrdersPage from './pages/OrdersPage'
import SignupPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'

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
          </Route>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
