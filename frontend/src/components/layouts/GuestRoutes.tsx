import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../features/auth/authStore';

const GuestRoutes = () => {
  const { user } = useAuthStore();
  return user ? <Navigate to="/" replace /> : <Outlet />;
}

export default GuestRoutes
