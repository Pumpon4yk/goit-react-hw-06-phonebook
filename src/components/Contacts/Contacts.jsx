import {
  Container,
  Label,
  Input,
  List,
  Item,
  PhoneNumber,
  ButtonDelete,
} from './Contacts.styled';

import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/seletors';
import { deleteContact } from 'redux/contactSlice';
import { setFilter } from 'redux/filterSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsFilter);

  const handleFilterChange = e => dispatch(setFilter(e.target.value));

  return (
    <Container>
      <Label>
        Find contacts by name
        <Input  onChange={handleFilterChange} />
      </Label>

      <List>
        {visibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}:<PhoneNumber>{number}</PhoneNumber>
            <ButtonDelete id={id} onClick={() => dispatch(deleteContact(id))}>
              Delete
            </ButtonDelete>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Contacts;
