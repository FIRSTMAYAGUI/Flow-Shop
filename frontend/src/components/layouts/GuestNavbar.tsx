import { Heart, Menu, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../Button"
import Logo from "../Logo"

const GuestNavbar = ({ color, borderColor }: { color?: string; borderColor?: string }) => {
  return (
     <header className="navbar">
      
      {/* Logo */}
      <Link to="/">
        <Logo />
      </Link>

      {/* Nav links - hidden on mobile */}
      <nav className={`nav-link ${color}`}>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </nav>

      {/* Right section - buttons + menu */}
      <div className="flex items-center gap-8">
        {/* icons */}
        <div className={`lg:flex gap-6 items-center hidden ${color}`}>
            <Link to="/favorites">
                <Heart className="icon"/>
            </Link>
            <Link to='/cart' className="icon relative p-3">
                <span className="absolute right-1 top-1 text-sm text-white bg-red-500 w-5 h-5 text-center rounded-full">3</span>
                <ShoppingCart/>
            </Link>
        </div>


        {/* Login */}
        <Button className={`hover:border-hover hover:text-hover px-6 py-2 rounded-md ${color} ${borderColor}`}>
            <Link to='/login'>Login</Link>
        </Button>

        {/* Mobile menu */}
        <Button className={`lg:hidden border-none p-2 ${color}`}>
          <Menu size={45} className="icon"/>
        </Button>
      </div>
    </header>
  )
}

export default GuestNavbar
