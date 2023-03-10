import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccess,
  fetchDeleteContactError,
} from './contacts-actions';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContactsLoading]: store => {
      store.isLoading = true;
    },

    [fetchContactsSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },

    [fetchContactsError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },

    [fetchAddContactLoading]: store => {
      store.isLoading = true;
    },

    [fetchAddContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },

    [fetchAddContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },

    [fetchDeleteContactLoading]: store => {
      store.isLoading = true;
    },

    [fetchDeleteContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },

    [fetchDeleteContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
