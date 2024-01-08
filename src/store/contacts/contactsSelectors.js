import { createSelector } from '@reduxjs/toolkit';

export const filterSelector = state => state.filter.nameFilter;

export const selectContacts = state => state.contacts.contacts;

const sortedContacts = createSelector(
  [selectContacts],
  contacts => contacts && contacts.slice().toSorted((a, b) => b.id - a.id)
);

const filteredNameContacts = createSelector(
  [sortedContacts, filterSelector],
  (contacts, nameFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

const isLoadingContacts = state => state.contacts.isLoading;

const errorContacts = state => state.contacts.error;

export const contactsSelectors = {
  selectContacts,
  sortedContacts,
  isLoadingContacts,
  errorContacts,
  filteredNameContacts,
};
