import { Link } from "react-router-dom"
import Button from "../Button"
import Logo from "../Logo"
import GoogleLogo from "../../assets/icons/google-icon.svg"

const AuthLayout = ({
  source,
  alt,
  message,
  MsgOption,
  button,
  ifAccountOrNot,
  children,
}: {
  source: string
  alt: string
  message: string
  MsgOption: string
  button: React.ReactNode
  ifAccountOrNot: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen flex">

      {/* Image section */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={source}
          alt={alt || 'auth-image'}
          className="w-full h-full object-cover"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-default-black/30" />
      </div>

      {/* Form section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10">

        <div className="w-full max-w-md space-y-8">

          {/* Logo */}
          <Link to={'/'}>
            <Logo/>
          </Link>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-default-gray">
              {message}
            </h1>
            <p className="text-gray-500">
              Please enter your details to continue
            </p>
          </div>

          <form className="space-y-6">

            {/* OAuth (Google, etc.) */}
            <div className="mb-6">
              <Button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition"
              >
                <img src={GoogleLogo} alt="Google" className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">
                  {MsgOption} with Google
                </span>
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-neutral-200" />
              <span className="text-sm text-gray-400">or</span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* inputs */}
            <div className="my-4 text-center text-sm font-medium text-gray-700">{MsgOption} with Email</div>
            <div className="space-y-4">
              {children}
            </div>

            {/* Submit button */}
            <div>
              {button}
            </div>
            <div className="text-gray-500 text-center">
              {ifAccountOrNot}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
