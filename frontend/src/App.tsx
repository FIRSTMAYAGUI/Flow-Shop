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
import NotFoundPage from './pages/404Page'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './features/auth/authStore'
import { useEffect } from 'react'
import { MoonLoader } from 'react-spinners'
import ProtectedRoutes from './components/layouts/ProtectedRoutes'
import GuestRoutes from './components/layouts/GuestRoutes'

function App() {
  const { checkAuth, isCheckingAuth } = useAuthStore();
  
  useEffect(()=>{
    checkAuth();
  }, [checkAuth])

  return (
    <>
    {
      isCheckingAuth ? (
      <div className='h-screen flex justify-center items-center'>
        <MoonLoader size={60} color="#4f8cff"/>
      </div>) :
      (
        <>
          <Toaster />
          <BrowserRouter>
            <Routes>

              <Route element={<HomeLayout/>}>
                <Route path='/' element={<Home />}/>
              </Route>

              <Route element={<AppLayout/>}>

                <Route path='/products' element={<ProductList />}/>
                <Route path='/product/:id' element={<ProductDetail/>} />
                <Route path='/cart' element={<CartPage/>}/>
                
                <Route element={<ProtectedRoutes/>}>
                  <Route path='/favorites' element={<Favorites/>}/>
                  <Route path='/orders' element={<OrdersPage/>}/>
                  <Route path='/checkout' element={<CheckoutPage/>}/>
                </Route>

              </Route>

              <Route element={<GuestRoutes/>}>
                <Route path='/auth/signup' element={<SignupPage/>}/>
                <Route path='/auth/login' element={<LoginPage/>}/>
              </Route>
              
              <Route path='/404' element={<NotFoundPage/>}/>
              
            </Routes>
          </BrowserRouter>
        </>
      )
    }
      
    </>
  )
}

export default App
