import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../features/auth/authStore"
import { BounceLoader } from "react-spinners";


const ProtectedRoutes = () => {
  const { user, isCheckingAuth } = useAuthStore()

  if(isCheckingAuth) return (
        <div className='h-screen flex justify-center items-center'>
            <BounceLoader size={80} color="#4f8cff"/>
        </div>
    );

    return user ? <Outlet/> : (<Navigate to={'/login'} replace/>)
}

export default ProtectedRoutes
