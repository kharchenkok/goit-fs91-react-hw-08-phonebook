import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { authSelector } from '../store/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isAuth = useSelector(authSelector);

  return isAuth ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
