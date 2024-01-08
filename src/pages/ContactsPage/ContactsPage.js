import Section from '../../components/Section';
import NameFilter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';

const ContactsPage = () => {
  return (
    <div className={'wrapper'}>
      <Section>
        <NameFilter />
        <ContactList />
      </Section>

      <Section title={'Add new contact'}>
        <ContactForm />
      </Section>
    </div>
  );
};

export default ContactsPage;
