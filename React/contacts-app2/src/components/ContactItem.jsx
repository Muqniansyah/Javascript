import React from "react";
// import react component
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";

// component ContactItem sebagai induk (parent) dari kedua komponen tersebut yaitu komponen ContactItemBody dan ContactItemImage.
function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div className="contact-item">
      {/* pemanggilan component dan menyiapkan data melalui property*/}
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
