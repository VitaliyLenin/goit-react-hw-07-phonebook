import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// import { addContact } from 'Redux/Contacts/contacts-slice';
// import { getFilteredContacts } from 'Redux/Contacts/contacts-selectors';
import { fetchAddContact } from 'Redux/Contacts/contacts-operations';
import { getAllContacts } from 'Redux/Contacts/contacts-selectors';
// import { getFilteredContacts } from 'Redux/Filter/filter-selectors';

import initialState from './initialState';

import css from './MyContactForm.module.css';

const MyContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const contacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const handleAddContact = ({ name, phone }) => {
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(fetchAddContact({ name, phone }));
    setState({ ...initialState });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit = handleAddContact({ name, phone });
  };

  const { name, phone } = state;

  return (
    <div className={css.phonebook_wrapper}>
      <form className={css.phonebook_form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className={css.input}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="contact name"
        />

        <label>Number</label>
        <input
          className={css.input}
          onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          placeholder="contact number"
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default MyContactForm;
