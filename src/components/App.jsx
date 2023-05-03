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

const CONTACTS_LIST = 'phone_contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsArray = JSON.parse(localStorage.getItem(CONTACTS_LIST));

    if (contactsArray) {
      this.setState({ contacts: contactsArray });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(CONTACTS_LIST, JSON.stringify(this.state.contacts));
    }
  }

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
