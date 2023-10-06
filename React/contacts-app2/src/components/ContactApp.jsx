import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

// class Komponen ContactApp ini menjadi root component atau induk dari induk component yang ada di dalam aplikasi ini. Di komponen ini juga data contacts--yang didapatkan dari fungsi getData--bersemayam.
class ContactApp extends React.Component {
  // konstruktor
  constructor(props) {
    super(props);

    // menyimpan data contacts di dalam this.state agar perubahan datanya memicu render UI
    this.state = {
      // jalankan fungsi getData dari file data.js
      contacts: getData(),
    };

    // binding event handler
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  // method onDeleteHandler untuk menangani event ketika tombol hapus diklik.
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  // fungsi handler untuk menambahkan data kontaknya.
  // fungsi onAddContactHandler membawa objek state dari ContactInput di parameter, di mana di dalam objek tersebut hanya ada dua data, yaitu name dan tag. Oleh karena itu, nilai dari properti id dan imageUrl kita berikan secara manual. Properti id diberi dengan nilai timestamp [+new Date()] agar selalu unik, sedangkan nilai dari properti imageUrl kita berikan dengan gambar default.jpg yang tersedia pada folder public/images.
  onAddContactHandler({ name, tag }) {
    // Prevstate berisikan isi state dari contatc Jadi sintaks ...prevState.contacts itu untuk mengisi state sebelum nya, jika kita tidak menaruh argumen tersebut maka yang akan kesimpan di state contats hanya contact yang baru tambahkan saja
    this.setState((prevState) => {
      return {
        //  menggunakan spread operator untuk mempertahankan item yang sebelumnya berada di dalam array contacts.
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "/images/default.jpg",
          },
        ],
      };
    });
  }

  // fungsi render mengembalikan react element
  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        {/* pemanggilan component dan menyiapkan data melalui property */}
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        {/* pemanggilan component dan menyiapkan data melalui property */}
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
