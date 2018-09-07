import React, { Component } from 'react';
// import React from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

// const contacts = [{
//         "id": "ryan",
//         "name": "Ryan Florence",
//         "email": "ryan@reacttraining.com",
//         "avatarURL": "http://localhost:5001/ryan.jpg"
//     },
//     {
//         "id": "michael",
//         "name": "Michael Jackson",
//         "email": "michael@reacttraining.com",
//         "avatarURL": "http://localhost:5001/michael.jpg"
//     },
//     {
//         "id": "tyler",
//         "name": "Tyler McGinnis",
//         "email": "tyler@reacttraining.com",
//         "avatarURL": "http://localhost:5001/tyler.jpg"
//     }
// ];

class App extends Component {
  state = {
    contacts: []
  };
  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({ contacts: contacts });
    });
  }
  removeContact = contact => {
    this.setState(state => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }));
    ContactsAPI.remove(contact);
  };
  render() {
    return (
      <ListContacts
        onDeleteContact={this.removeContact}
        contacts={this.state.contacts}
      />
    );
  }
}

export default App;
