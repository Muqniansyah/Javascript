import React from "react";

// buat react component dan juga memberikan props berisi object name dan tag.
function ContactItemBody({ name, tag }) {
  // mengembalikan react element
  return (
    <div className="contact-item__body">
      {/* properti name dan tag untuk menampung nama dan tag kontak yang akan diberikan oleh parent component. */}
      <h3 className="contact-item__title">{name}</h3>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
}

// ekspor modul
export default ContactItemBody;
