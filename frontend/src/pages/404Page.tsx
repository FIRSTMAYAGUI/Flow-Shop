import { Link } from "react-router-dom"
import Button from "../components/Button"
import Container from "../components/Container"

const NotFoundPage = () => {
  return (
    <Container>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

        {/* Big 404 */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold text-primary-color leading-none">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-default-gray">
          Page not found
        </h2>

        <p className="mt-4 text-gray-500 max-w-md">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <Link to="/">
            <Button className="bg-primary-color text-white hover:bg-primary-color/90">
              Go Home
            </Button>
          </Link>

          <Link to="/product">
            <Button className="border border-gray-300 hover:border-primary-color hover:text-primary-color">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundPage
