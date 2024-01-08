import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { authSelector } from '../store/auth/authSelectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(authSelector);

  return isAuth ? <Navigate to={redirectTo} /> : <Component />;
};

export default PublicRoute;
