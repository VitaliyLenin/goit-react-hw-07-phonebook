import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getFilteredContacts } from 'Redux/Contacts/contacts-selectors';

// import { removeContact } from 'Redux/Contacts/contacts-slice';

import {
  fetchContacts,
  fetchDeleteContact,
} from 'Redux/Contacts/contacts-operations';

import css from './ContactList.module.css';

const MyContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemoveContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const names = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name} : {number}
      <button
        className={css.button}
        onClick={() => handleRemoveContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className={css.contacts_wrapper}>
      <ul className={css.contact_items}>{names}</ul>
    </div>
  );
};

export default MyContactList;
