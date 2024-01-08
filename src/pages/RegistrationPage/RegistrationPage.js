import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/auth/authOperations';
import RegistrationForm from '../../components/RegistrationForm';
import Section from '../../components/Section';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const register = newUser => {
    dispatch(registerUser(newUser));
  };
  return (
    <Section extraClass={'contentCenter'}>
      <RegistrationForm register={register} />
    </Section>
  );
};

export default RegistrationPage;
