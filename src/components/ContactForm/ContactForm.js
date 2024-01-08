import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  showError,
  showSuccess,
  showWarning,
} from '../../utils/ToastNotification';

import { addContact } from '../../store/contacts/contactsOperations';
import { contactsSelectors } from '../../store/contacts/contactsSelectors';
import style from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.sortedContacts);
  const error = useSelector(contactsSelectors.errorContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (!name.value.trim() || !number.value.trim()) {
      showError('Make sure all fields are completed!');
      return;
    }

    if (existingContact) {
      showWarning(`${name.value} is already in contacts!`);
      return;
    }

    dispatch(
      addContact({
        name: name.value,
        number: number.value,
      })
    );

    if (error) {
      showError('Error adding contact.');
      return;
    }

    showSuccess(`${name.value} added to contacts!`);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        name="name"
        placeholder={'Name'}
        required
        className={style.formInput}
      />

      <input
        type="tel"
        name="number"
        placeholder={'Phone number'}
        required
        className={style.formInput}
      />

      <button type="submit">Add</button>
    </form>
  );
}
