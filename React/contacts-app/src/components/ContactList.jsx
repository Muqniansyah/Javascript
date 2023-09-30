import React from "react";
import ContactItem from "./ContactItem";

// component ContactList akan melakukan perulangan (menggunakan map) dalam memanggil component ContactItem sebanyak data contacts yang diberikan melalui properti.
function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {/* membuat list di React */}
      {contacts.map((contact) => (
        // memanggil component ContactItem
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
