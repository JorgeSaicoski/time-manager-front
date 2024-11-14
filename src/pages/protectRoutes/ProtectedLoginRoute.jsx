import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const ProtectedLoginRoute = ({ children }) => {
  const { user, token } = useSelector(state => state.auth);
  
  if (!user || !token) {
    return <Navigate to="/login" />;
  }
  
  return children;
};