// import { createSelector } from '@reduxjs/toolkit';
// import { getFilter } from 'Redux/Filter/filter-selectors';

export const getAllContacts = store => store.contacts;

// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;

// export const getFilteredContacts = ({ contacts, filter }) => {
//   if (!filter) {
//     return contacts.items;
//   }

//   const normalizedName = filter.toLowerCase();
//   const result = contacts.items.filter(({ name }) => {
//     return name.toLowerCase().includes(normalizedName);
//   });

//   return result;
// };

// export const getFilteredContacts = createSelector(
//   [getAllContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) => {
//       const normalizedName = name.toLowerCase();
//       return normalizedName.includes(normalizedFilter);
//     });
//   }
// );

// export const getFilteredContacts = store => {
//   const normalizedFilter = store.filter.toLocaleLowerCase();

//   return store.contacts.items.filter(({ name }) =>
//     name.toLocaleLowerCase().includes(normalizedFilter)
//   );
// };
