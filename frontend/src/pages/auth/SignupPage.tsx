import AuthLayout from "../../layouts/AuthLayout"
import WomanSmilling from "../../assets/brunette-haired-woman-smiling.jpg"
import { Link } from "react-router-dom"

const SignupPage = () => {
  return (
    <AuthLayout
      source={WomanSmilling}
      alt="Signup illustration"
      message="Create your account"
      MsgOption="Signup"
      action="Sign up"
    >

      {/* Signup with email */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-color"
        />

        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-color"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-color"
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-color"
        />
      </div>

      {/* Terms */}
      <p className="mt-4 text-sm text-gray-500">
        By creating an account, you agree to our{" "}
        <Link to='' className="text-primary-color font-medium cursor-pointer">
          Terms
        </Link>{" "}
        and{" "}
        <Link to='' className="text-primary-color font-medium cursor-pointer">
          Privacy Policy
        </Link>.
      </p>
    </AuthLayout>
  )
}

export default SignupPage

