import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/auth/authOperations';
import { showError, showSuccess } from '../../utils/ToastNotification';
import LoginForm from '../../components/LoginForm';
import Section from '../../components/Section';

const LoginPage = () => {
  const dispatch = useDispatch();

  const login = newUser => {
    dispatch(loginUser(newUser))
      .unwrap()
      .then(() => showSuccess('Success! You are logged in!'))
      .catch(error => showError('Error! Check your email or password!'));
  };

  return (
    <Section extraClass={'contentCenter'}>
      <LoginForm login={login} />
    </Section>
  );
};

export default LoginPage;
