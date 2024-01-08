import Section from '../../components/Section';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Section title={'Keep your contacts with us'} extraClass={'contentCenter'}>
      <Link className={'logginButton'} to="/login">
        Lets start
      </Link>
    </Section>
  );
};

export default HomePage;
