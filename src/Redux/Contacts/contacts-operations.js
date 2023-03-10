import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/API/contacts';

// import {
//   fetchContactsLoading,
//   fetchContactsSuccess,
//   fetchContactsError,
//   fetchAddContactLoading,
//   fetchAddContactSuccess,
//   fetchAddContactError,
//   fetchDeleteContactLoading,
//   fetchDeleteContactError,
//   fetchDeleteContactSuccess,
// } from './contacts-actions';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

// export const fetchContacts = () => {
//   const funk = async dispatch => {
//     try {
//       dispatch(fetchContactsLoading());
//       const data = await api.getContacts();
//       dispatch(fetchContactsSuccess(data));
//       console.log(data);
//     } catch ({ response }) {
//       dispatch(fetchContactsError(response.data.message));
//     }
//   };
//   return funk;
// };

// export const fetchAddContact = data => {
//   const funk = async dispatch => {
//     try {
//       dispatch(fetchAddContactLoading());
//       const result = await api.addContact(data);
//       dispatch(fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(fetchAddContactError(response.data.message));
//     }
//   };

//   return funk;
// };

// export const fetchDeleteContact = id => {
//   const funk = async dispatch => {
//     try {
//       dispatch(fetchDeleteContactLoading());
//       await api.deleteContact(id);
//       dispatch(fetchDeleteContactSuccess(id));
//     } catch ({ response }) {
//       dispatch(fetchDeleteContactError(response.data.message));
//     }
//   };

//   return funk;
// };
