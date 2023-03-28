export const getContacts = state => state.contacts;

export const getStatusFilter = state => state.filter;

export const contactsFilter = state => {
  const contacts = getContacts(state);
  const filterName = getStatusFilter(state);

  return contacts.filter(e =>
    e.name.toLowerCase().includes(filterName.toLowerCase())
  );
};
