import Container from '../Container'
import Footer from './Footer'
import GuestNavbar from './GuestNavbar'
import Hero from '../Hero'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useAuthStore } from '../../features/auth/store/authStore'

const HomeLayout = () => {
  const { user } = useAuthStore();

  return (
    <>
      <header className="w-full text-4xl bg-[url(./assets/images/brunette-haired-woman-smiling.jpg)] bg-cover bg-center lg:bg-right h-screen relative before:absolute before:bg-[#4746466b] before:w-full before:h-full flex flex-col">
        { user? (<Navbar />) : (<GuestNavbar />) }
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
