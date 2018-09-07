import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import React from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';

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
    // screen: 'list', // list , create page
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
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              onDeleteContact={this.removeContact}
              contacts={this.state.contacts}
              // onNavigate={() => {
              //   this.setState({ screen: 'create' });
              // }}
            />
          )}
        />
        <Route path="/create" component={CreateContact} />
      </div>
    );
  }
}

export default App;
