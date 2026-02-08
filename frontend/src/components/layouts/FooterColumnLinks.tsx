import { Link } from 'react-router-dom'

type FooterLinkDestination = {
  label: string
  to: string
}

type FooterColumnLinksProps = {
  title: string
  links: FooterLinkDestination[]
}

const FooterColumnLinks = ({ title, links }: FooterColumnLinksProps) => {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-6">
        {title}
      </h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              className="hover:text-secondary-color transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumnLinks
