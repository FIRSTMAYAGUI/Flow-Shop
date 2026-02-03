import AuthLayout from '../../layouts/AuthLayout'
import WomanSmilling from "../../assets/images/brunette-haired-woman-smiling.jpg"
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
      <AuthLayout
      source={WomanSmilling}
      alt="Login illustration"
      message="Welcome back"
      MsgOption="Login"
      action="Log In"
      ifAccountOrNot={
        <div>
          Don't have an account? <Link to='/signup' className="text-primary-color font-medium cursor-pointer">Signup</Link>
        </div>
      }
    >

      {/* Signup with email */}
      <div className="space-y-4">
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
      </div>
    </AuthLayout>
    </>
  )
}

export default LoginPage
