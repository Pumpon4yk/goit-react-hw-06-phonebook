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
import { getContacts, getStatusFilter } from 'redux/seletors';
import { deleteContact } from 'redux/contactSlice';
import { setFilter } from 'redux/filterSlice';

const contactsFilter = (arr, name) =>
  arr.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  const visibleContacts = contactsFilter(contacts, filter);

  const handleFilterChange = e => dispatch(setFilter(e.target.value));

  return (
    <Container>
      <Label>
        Find contacts by name
        <Input value={filter} onChange={handleFilterChange} />
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
