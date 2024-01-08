import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';

import PrivateRoute from './guards/PrivateRoute';
import PublicRoute from './guards/PublicRoute';
import { refreshUser } from './store/auth/authOperations';

import { lazy } from 'react';
import { authSelector } from './store/auth/authSelectors';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelector);

  useEffect(() => {
    if (!isAuth) return;
    dispatch(refreshUser());
  }, [dispatch, isAuth]);

  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  component={RegistrationPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
