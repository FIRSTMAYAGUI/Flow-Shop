import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import GuestNavbar from "./GuestNavbar"
import { useAuthStore } from "../../features/auth/store/authStore";
import Navbar from "./Navbar"

const AppLayout = () => {
  const { user } = useAuthStore();

  return (
    <>
      <header className="relative h-25 w-full">
        
      { user? (<Navbar color="text-default-black"/>) : (<GuestNavbar color="text-default-black" borderColor="border-default-black"/>) }
      </header>
      
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

export default AppLayout
