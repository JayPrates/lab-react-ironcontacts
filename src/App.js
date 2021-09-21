import logo from './logo.svg';
import './App.css';
import contactsJSON from './contacts.json';
import react, { useState } from 'react';



function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  const randomContact = () => {
    let randomContact = Math.floor(Math.random() * contacts.length);
    let leftContacts = contactsJSON[randomContact];
    contactsJSON.slice(randomContact, 1)
    setContacts([...contacts, leftContacts]);
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  const sortByPopularity = () => {
    contacts.sort((a, b) => (b.popularity - a.popularity));
    setContacts([...contacts]);
  }
  const sortByName = () => {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    setContacts([...contacts]);
  }

  return (
    <>
      <button onClick={randomContact}>Add random contact</button>
      <button onClick={sortByName}>Sort Contacts by Name</button>
      <button onClick={sortByPopularity}>Sort Contacts by Popularity</button>
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <tr>
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
            <th><h2>Won Oscar</h2></th>
            <th><h2>Won Emmy</h2></th>
          </tr>
          {contacts.map((contact) => {
            return (<>
              <tr>
                <th><img src={contact.pictureUrl} with='200' height='200' /></th>
                <th>{contact.name}</th>
                <th>{contact.popularity}</th>
                <th>{contact.wonOscar ? "🏆" : ""}</th>
                <th>{contact.wonEmmy ? "🏆" : ""}</th>
              </tr>
              <button onClick={() => deleteContact(contact.id)}>Delete Contact</button>
            </>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default App;
