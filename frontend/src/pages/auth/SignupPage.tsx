import AuthLayout from "../../components/layouts/AuthLayout"
import WomanSmilling from "../../assets/images/brunette-haired-woman-smiling.jpg"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useState } from "react"
import { useAuthStore } from "../../features/auth/store/authStore"
import { useForm } from "react-hook-form"
import type { SignupPayload } from "../../features/auth/authTypes"
import { ClipLoader } from "react-spinners"
import toast from "react-hot-toast"

const SignupPage = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }} = useForm<SignupPayload>();
  const { error, signup } = useAuthStore();
  const navigate = useNavigate();

  const password = watch("password");

  //console.log("user data: ", user)

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true)
    try {
      const successfullSignup = await signup(data)
      if(successfullSignup){
        toast.success('Signup successfull', {
          duration: 3000,
          position: 'top-right',

          // Styling
          style: {},
          className: 'w-50',

          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },

          // Additional Configuration
          removeDelay: 1000,
        })

        navigate("/")
      } else{
        toast.error('Signup failed', {
          duration: 3000,
          position: 'top-right',

          // Styling
          style: {},
          className: 'w-40',

          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },

          // Additional Configuration
          removeDelay: 1000,
        })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <AuthLayout
      source={WomanSmilling}
      alt="Signup illustration"
      message="Create your account"
      MsgOption="Signup"
      button={
        <Button className="w-full bg-primary-color text-white py-3 rounded-xl font-semibold hover:bg-primary-color/90 transition flex justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" 
        onClick={onSubmit}
        disabled={isLoading}
        >
          {
            isLoading ? 
            (
              <>
                <ClipLoader size={20} color="#ffffff" />
                <span>Signing in...</span>
              </>
            ) : 'Sign Up'
          }
        </Button>
      }
      ifAccountOrNot={
        <div>
          Already have an account? <Link to='/login' className="text-primary-color font-medium cursor-pointer">Login</Link>
        </div>
      }
    >

      {/* Signup with email */}
      <div className="space-y-4">

        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full name"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm ${errors.fullname ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-color"}`}
            {...register("fullname", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters",
              },
            })}
          />
          {errors.fullname && (
            <p className="text-sm text-red-500">
              {errors.fullname.message as string}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email address"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm ${errors.email ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-color"}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message as string}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm ${errors.password ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-color"}`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message as string}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            placeholder="Confirm password"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm ${errors.password_confirmation ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-color"}`}
            {...register("password_confirmation", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.password_confirmation && (
            <p className="text-sm text-red-500">
              {errors.password_confirmation.message as string}
            </p>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>

      {/* Remember me */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-primary-color" />
          Remember me
        </label>
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

