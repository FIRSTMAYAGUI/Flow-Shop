import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import GuestNavbar from "./GuestNavbar"
//import Navbar from "./Navbar"

const AppLayout = () => {
  return (
    <>
      <header className="relative h-25 w-full">
        <GuestNavbar color="text-default-black" borderColor="border-default-black"/>
        {/* <Navbar color="text-default-black"/> */}
      </header>
      
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

export default AppLayout
