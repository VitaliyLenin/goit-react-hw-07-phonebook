import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

// const initialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.items = payload;
//       })
//       .addCase(fetchContacts.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(fetchAddContact.pending, state => {
//         state.isLloading = true;
//       })
//       .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.items.push(payload);
//       })
//       .addCase(fetchAddContact.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(fetchDeleteContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         const index = state.items.findIndex(item => item.id === payload);
//         state.items.splice(index, 1);
//       })
//       .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       });
//   },
// });

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
