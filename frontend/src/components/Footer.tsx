import { Link } from "react-router-dom"
import Logo from "./Logo"
import { Facebook, Github, Instagram, Youtube } from "lucide-react"
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
          <div className="flex gap-6 mt-8 *:hover:text-secondary-color *:hover:transition *:hover:delay-150">
            <Link to="">
              <Facebook />
            </Link>
            <Link to="">
              <Instagram />
            </Link>
            <Link to="">
              <Youtube />
            </Link>
            <Link to="">
              <Github />
            </Link>
          </div>
        </div>

        {/* Links column */}
        <FooterColumnLinks
          title="Useful Links"
          links={["Home", "Products", "Categories", "About", "Contact"]}
        />

        <FooterColumnLinks
          title="Company"
          links={["Privacy Policy", "Terms & Conditions", "Careers", "Blog"]}
        />

        <FooterColumnLinks
          title="Support"
          links={["Help Center", "FAQs", "Returns", "Shipping"]}
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
