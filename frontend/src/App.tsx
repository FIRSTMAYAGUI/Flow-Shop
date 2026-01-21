import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import AppLayout from './layouts/AppLayout'
import HomeLayout from './layouts/HomeLayout'
import Favorites from './pages/Favorites'

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
            <Route path='/favorites' element={<Favorites/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
