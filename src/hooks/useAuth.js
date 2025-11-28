import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return {
    user,
    token,
    isAuthenticated,
    logout: handleLogout,
  };
};