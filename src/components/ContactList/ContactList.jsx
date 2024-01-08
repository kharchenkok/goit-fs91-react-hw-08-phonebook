import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BiSolidUserRectangle, BiPhone } from 'react-icons/bi';

import Notification from '../Notification';
import { showError, showInfo } from '../../utils/ToastNotification';
import { contactsSelectors } from '../../store/contacts/contactsSelectors';
import {
  deleteContact,
  fetchContacts,
} from '../../store/contacts/contactsOperations';
import { getRandomColorFromOptions } from '../../utils/RandomColorFromOptions';

import style from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.sortedContacts);
  const filteredContacts = useSelector(contactsSelectors.filteredNameContacts);
  const error = useSelector(contactsSelectors.errorContacts);
  const isLoading = useSelector(contactsSelectors.isLoadingContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    if (error) {
      showError(`Error while deleting contact`);
      return;
    }
    showInfo(`Contact ${name} deleted`);
  };

  if (isLoading && contacts.length === 0) {
    return <Notification text={'Loading...'} />;
  }

  if (error) {
    return (
      <Notification
        text={`Error (${error}) while loading contacts. Please try again later.`}
      />
    );
  }
  return (
    <div>
      {filteredContacts.length > 0 && contacts.length > 0 ? (
        <ul className={style.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
              <p>
                <BiSolidUserRectangle
                  style={{ color: getRandomColorFromOptions() }}
                  className={style.nameIcon}
                />
                {name}
              </p>
              <p>
                <BiPhone />
                {number}
              </p>
              <button
                type={'button'}
                onClick={() => handleDelete(id, name)}
                className={style.contactDelButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Notification text={'No contacts in the list'} />
      )}
    </div>
  );
};
export default ContactList;
