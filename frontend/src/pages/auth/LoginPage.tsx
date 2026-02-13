import AuthLayout from '../../components/layouts/AuthLayout'
import WomanSmilling from "../../assets/images/brunette-haired-woman-smiling.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import type { LoginPayload } from '../../features/auth/authTypes'
import Button from '../../components/Button'
import { useAuthStore } from '../../features/auth/store/authStore'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const LoginPage = () => {

  const [ isLoading, setIsLoading ] = useState(false);
  const { register, handleSubmit, formState: { errors }} = useForm<LoginPayload>();
  const { user, error, login } = useAuthStore();
  const navigate = useNavigate();
  console.log("user first : ", user)

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true)
    try {
      const successfullLogin = await login(data)
      if(successfullLogin){ 
        navigate("/")
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
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
        <Button className="w-full bg-primary-color hover:bg-primary-color/90 text-white py-3 rounded-xl font-semibold transition flex justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" 
        onClick={onSubmit}
        disabled={isLoading}
        >
          {
            isLoading ? 
            (
              <>
                <ClipLoader size={20} color="#ffffff" />
                <span>Logging in...</span>
              </>
            ) : 'Log in'
          }
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
              }, 
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })
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

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </AuthLayout>
    </>
  )
}

export default LoginPage
