import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../features/auth/authStore"


const ProtectedRoutes = () => {
  const { user } = useAuthStore()
    return user ? <Outlet/> : (<Navigate to={'/login'} replace/>)
}

export default ProtectedRoutes
