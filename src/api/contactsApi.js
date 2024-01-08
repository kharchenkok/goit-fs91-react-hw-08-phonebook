import { api } from './authApi';

export const fetchAllContacts = async () => {
  const response = await api.get('/contacts');
  return response.data;
};

export const addNewContact = async contact => {
  const response = await api.post('/contacts', contact);
  return response.data;
};

export const deleteContactById = async id => {
  await api.delete(`/contacts/${id}`);
  return id;
};
