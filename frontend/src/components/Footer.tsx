import { Link } from "react-router-dom"
import Logo from "./Logo"
import FacebookIcon from "../assets/icons/facebook.svg"
import YoutubeIcon from "../assets/icons/youtube-icon.svg"
import GithubIcon from "../assets/icons/github-icon.svg"
import { Instagram } from "lucide-react"


import FooterColumnLinks from "./FooterColumnLinks"

function Footer() {
  return (
    <footer className="w-full bg-default-black text-gray-300 px-6 py-20 lg:px-20">
      
      {/* Top footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-6 text-base leading-relaxed max-w-md">
            Making the world a better place through constructing elegant hierarchies.
          </p>

          {/* Socials */}
          <div className="flex gap-6 mt-8">
            <Link to="" className="hover:opacity-80 transition">
              <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
            </Link>

            <Link to="" className="hover:opacity-80 transition">
              <Instagram/>
            </Link>

            <Link to="" className="hover:opacity-80 transition">
              <img src={YoutubeIcon} alt="YouTube" className="h-6 w-6" />
            </Link>

            <Link to="" className="hover:opacity-80 transition">
              <img src={GithubIcon} alt="GitHub" className="h-6 w-6" />
            </Link>
          </div>

        </div>

        {/* Links column */}
        <FooterColumnLinks
          title="Useful Links"
          links={[
            {label: "Home", to: "/"}, 
            {label: "Products", to: "/product"}, 
            {label: "About", to: "/"}, 
            {label: "Contact", to: "/"}
          ]}
        />

        <FooterColumnLinks
          title="Company"
          links={[
            {label: "Help Center", to: "/"}, 
            {label: "FAQs", to: "/"}, 
            {label: "Returns", to: "/"}, 
            {label: "Shipping", to: "/"}
          ]}
        />

        <FooterColumnLinks
          title="Support"
          links={[
            {label: "Help Center", to: "/"}, 
            {label: "FAQs", to: "/"}, 
            {label: "Returns", to: "/"}, 
            {label: "Shipping", to: "/"}
          ]}
        />
      </div>

      {/* Bottom footer */}
      <div className="border-t border-neutral-700 mt-16 pt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FlowShop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
