import { useState, useEffect } from "react";

import "./style.css"

import List from "./list";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Efe ",
      phone_number: 123,
    },
    {
      fullname: "Berkay ",
      phone_number: 456,
    },
    {
      fullname: "Ecehan ",
      phone_number: 789,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
        <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
