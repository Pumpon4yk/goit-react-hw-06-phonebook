import { Container, TitleContact, TitleForm } from './App.styled';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

export default function App() {


  return (
    <Container>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm />

      <TitleContact>Contacts</TitleContact>
      <Contacts/>
    </Container>
  );
}
