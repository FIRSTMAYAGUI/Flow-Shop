import { Outlet } from "react-router-dom"
//import Navbar from "../components/Navbar"
import Footer from "./Footer"
import GuestNavbar from "./GuestNavbar"

const AppLayout = () => {
  return (
    <>
      <header className="relative h-25 w-full">
        <GuestNavbar color="text-default-black" borderColor="border-default-black"/>
      </header>
      
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

export default AppLayout
