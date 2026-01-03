
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AppLayout = () => {
  return (
    <>
      <header className="relative h-25 w-full">
        <Navbar color="text-default-black" borderColor="border-default-black"/>
      </header>
      
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default AppLayout
