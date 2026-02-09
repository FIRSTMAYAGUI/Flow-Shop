import AuthLayout from '../../components/layouts/AuthLayout'
import WomanSmilling from "../../assets/images/brunette-haired-woman-smiling.jpg"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import type { LoginPayload } from '../../features/auth/authTypes'
import Button from '../../components/Button'
import { useAuthStore } from '../../features/auth/store/authStore'
import { useState } from 'react'

const LoginPage = () => {

  const [ isLoading, setIsLoading ] = useState(false)

  const { register, handleSubmit, formState: { errors }} = useForm<LoginPayload>();

  const { user, login } = useAuthStore();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    setIsLoading(true)
    try {
      await login(data)
      console.log('user: ', user)
      setIsLoading(false)
      // later: navigate("/") or dashboard
    } catch (error) {
      console.error(error)
    }
  })


  return (
    <>
      <AuthLayout
      source={WomanSmilling}
      alt="Login illustration"
      message="Welcome back"
      MsgOption="Login"
      button={
        <Button className="w-full bg-primary-color text-white py-3 rounded-xl font-semibold hover:bg-primary-color/90 transition" 
        onClick={onSubmit}
        disabled={isLoading ? true : false}
        >
          {isLoading ? 'Log in ....' : 'Log in'}
        </Button>
      }
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
          className={`w-full border rounded-lg px-4 py-2.5 text-sm  ${errors.email ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-color"}`}

          {...register("email", { 
            required: "Email is required", 
            maxLength: {
              value: 100,
              message: "Email is too long",
            }, })
          }
        />
        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}

        <input
          type="password"
          placeholder="Password"
          className={`w-full border rounded-lg px-4 py-2.5 text-sm  ${errors.password ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-color"}`}

          {...register("password", { 
            required: "Password is required", 
            minLength: {
              value: 8,
              message: "Password should be atleast 8 characters",
            }, })
          }
        />

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>
    </AuthLayout>
    </>
  )
}

export default LoginPage
