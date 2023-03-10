import { createSlice } from '@reduxjs/toolkit';

// import {
//   fetchContactsLoading,
//   fetchContactsSuccess,
//   fetchContactsError,
//   fetchAddContactLoading,
//   fetchAddContactSuccess,
//   fetchAddContactError,
//   fetchDeleteContactLoading,
//   fetchDeleteContactSuccess,
//   fetchDeleteContactError,
// } from './contacts-actions';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [fetchContactsLoading]: store => {
//       store.isLoading = true;
//     },

//     [fetchContactsSuccess]: (store, { payload }) => {
//       store.isLoading = false;
//       store.items = payload;
//     },

//     [fetchContactsError]: (store, { payload }) => {
//       store.isLoading = false;
//       store.error = payload;
//     },

//     [fetchAddContactLoading]: store => {
//       store.isLoading = true;
//     },

//     [fetchAddContactSuccess]: (store, { payload }) => {
//       store.isLoading = false;
//       store.items.push(payload);
//     },

//     [fetchAddContactError]: (store, { payload }) => {
//       store.isLoading = false;
//       store.error = payload;
//     },

//     [fetchDeleteContactLoading]: store => {
//       store.isLoading = true;
//     },

//     [fetchDeleteContactSuccess]: (store, { payload }) => {
//       store.isLoading = false;
//       const index = store.items.findIndex(item => item.id === payload);
//       store.items.splice(index, 1);
//     },

//     [fetchDeleteContactError]: (store, { payload }) => {
//       store.isLoading = false;
//       store.error = payload;
//     },
//   },
// });

export default contactSlice.reducer;
