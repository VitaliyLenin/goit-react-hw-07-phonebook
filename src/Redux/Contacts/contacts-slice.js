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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAddContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id === payload);
        state.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
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

export default contactsSlice.reducer;
