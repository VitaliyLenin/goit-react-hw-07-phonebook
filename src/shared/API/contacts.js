import axios from 'axios';

// const contactsInstance = axios.create({
//   baseURL: 'https://640a284e6ecd4f9e18c68a47.mockapi.io/contacts',
// });

// export const getContacts = async () => {
//   const { data } = await contactsInstance.get('/');
//   return data;
// };

// export const addContact = async data => {
//   const { data: result } = await contactsInstance.post('/', data);
//   return result;
// };

// export const deleteContact = async id => {
//   const { data } = await contactsInstance.delete(`/${id}`);
//   return data;
// };

const instance = axios.create({
  baseURL: 'https://640a284e6ecd4f9e18c68a47.mockapi.io/contacts',
});

export const selectContacts = async () => {
  const data = await instance.get('/');
  return data;
};
