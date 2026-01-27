import { Heart, Menu, ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "./Button"
import Logo from "./Logo"

const Navbar = ({color, borderColor}:{color?: string, borderColor?: string}) => {
  return (
    <div className="navbar">
        
        {/* Logo */}
        <Link to={'/'}>
            <Logo/>
        </Link>

        {/* nav links */}
        <nav className={`nav-link ${color}`}>
            <Link to={'/'} >Home</Link>
            <Link to={'/product'}>Products</Link>
            <Link to={'/'}>About</Link>
            <Link to={'/'}>Contact</Link>
        </nav>

        {/* icons */}
        <div className="flex gap-10 items-center">
            <div className={`xl:flex gap-6 items-center hidden ${color}`}>
                <Link to="/favorites">
                    <Heart className="icon"/>
                </Link>
                <Link to={'/'} className="icon">
                    <User />
                </Link>
                <Link to={'/cart'} className="icon relative p-3">
                    <span className="absolute right-1 top-1 text-sm text-white bg-red-500 w-5 h-5 text-center rounded-full">3</span>
                    <ShoppingCart/>
                </Link>
            </div>

            {/* Login and menu */}
            <div className={`flex sm:w-48 md:w-fit sm:justify-between gap-6 ${color}`}>   
                <Button className={`hover:border-hover hover:text-hover px-6 py-2 rounded-md ${borderColor}`}>
                    <Link to={'/'}>Login</Link>
                </Button>
                <Button className="xl:hidden border-none">
                    <Menu size={'45px'} className="icon"/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
