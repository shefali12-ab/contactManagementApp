
import { ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT } from './actionType';

export const addContact = (contact : string)  => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const removeContact = (id: number) => ({
  type: REMOVE_CONTACT,
  payload: id,
});

export const editContact = (contact : string) => ({
  type: EDIT_CONTACT,
  payload: contact,
});


