import Container from '../Container'
import Footer from './Footer'
import GuestNavbar from './GuestNavbar'
import Hero from '../Hero'
//import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <header className="w-full text-4xl bg-[url(./assets/images/brunette-haired-woman-smiling.jpg)] bg-cover bg-center lg:bg-right h-screen relative before:absolute before:bg-[#4746466b] before:w-full before:h-full flex flex-col">
        <GuestNavbar />
        <Container>
          <Hero/>
        </Container>
      </header>
      
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

export default HomeLayout
