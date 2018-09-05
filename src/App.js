import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts;

    return (
      <ul>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ContactList
          contacts={[
            { name: 'Eddard' },
            { name: 'Cersei' },
            { name: 'Robert' },
            { name: 'Arya' }
          ]}
        />
        <ContactList
          contacts={[{ name: 'Sansa' }, { name: 'Theon' }, { name: 'Robb' }]}
        />
      </div>
    );
  }
}

export default App;
