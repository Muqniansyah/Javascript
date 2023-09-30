import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

// Komponen ContactApp ini menjadi root component atau induk dari induk component yang ada di dalam aplikasi ini. Di komponen ini juga data contacts--yang didapatkan dari fungsi getData--bersemayam.
function ContactApp() {
  // variabel contacts untuk jalankan fungsi getData dari file data.js
  const contacts = getData();
  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      {/* pemanggilan component dan menyiapkan data melalui property */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;
