import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Container,
  MainTitle,
  SecondTitle,
} from './Container/Container.styled';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import FilterForm from './Filter/Filter';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const checkName = this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { contacts } = this.state;

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <PhonebookForm addContact={this.addContact} />
        <SecondTitle>Contacts</SecondTitle>
        <FilterForm
          label="Find contacts by name"
          onChange={this.handleFilterChange}
        />
        {contacts.length === 0 ? (
          <p>You don't have contacts yet</p>
        ) : (
          <Contacts
            options={filteredContacts}
            removeContact={this.removeContact}
          />
        )}
      </Container>
    );
  }
}
