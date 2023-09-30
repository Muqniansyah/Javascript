import React from "react";

function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact-item__image">
      {/* properti imageUrl untuk menampung url gambar yang akan diberikan oleh parent component. */}
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}

export default ContactItemImage;
