import React from "react";
import { createRoot } from "react-dom/client";

// class component
class MyComponent extends React.Component {
  // constructor
  //Ketika Anda memanfaatkan constructor, pastikan selalu memanggil base constructor (super) dan berikan nilai props. Jika tidak, nilai this.props pada component akan bernilai undefined.
  constructor(props) {
    // didalamnya bisa untuk menginisialisasi data, seperti state atau kode yang akan dipanggil setiap kali pembuatan component.
    super(props);
    console.log("component created");
  }

  // fungsi render untuk mengembalikkan react element
  render() {
    return <p>Hello, {this.props.name}</p>; //{this.props.name} untuk buat properti name menggunakan this.props. Karena this pada class component bernilai instance dari component itu sendiri, Anda bisa mengakses props.
  }
}

// -------------------------------pernerapan state dan event handling---------------------

//  component untuk menampilkan data count
//  Data count yang ditampilkan pada component ini akan diberikan melalui props oleh CounterApp. component inilah yang bertugas menampilkan data.
function CounterDisplay({ count }) {
  if (count === 0) {
    return <p>{count}</p>;
  }

  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>;
  }

  if (count % 5 === 0) {
    return <p>Fizz</p>;
  }

  if (count % 7 === 0) {
    return <p>Buzz</p>;
  }

  return <p>{count}</p>;
}

// component IncreaseButton yang digunakan sebagai tombol untuk meningkatkan nilai count setiap kali diklik.
function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

// component ResetButton untuk mereset nilai dari count.
function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}

// class component CounterApp
class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisai nilai count didalam state. inisialisai state harus dilakukan pada constructor.
    this.state = {
      count: 0,
    };

    // binding event handler. lakukan binding nilai this pada fungsi event handler.
    // supaya component IncreaseButton yang dibuat dapat memanggil thisnya yaitu kearah onIncreaseEventHandler dan onResetEventHandler, bukan window. (IncreaseButton tidak memiliki this-nya sendiri karena functional component, sehingga nilai this adalah window).
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  // method (event handler) yaitu onIncreaseEventHandler untuk menaikkan nilai dari count
  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  // method (event handler) yaitu onResetEventHandler untuk mereset nilai dari count
  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        {/* pemanggilan component */}
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

// -------------------------------Controlled Component---------------------

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    // Agar nilai state dari Form dapat dikontrol oleh React, kita perlu menyiapkan nilai state pada masing-masing input yang ada.
    this.state = {
      name: "",
      email: "",
      gender: "Man",
    };

    // binding event handler
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler =
      this.onGenderChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  //Kita akan mengubah nilai state setiap kali terjadi input pengguna pada <input>. Oleh karena itu, siapkan event handler terlebih dahulu guna menangani perubahan state untuk masing-masing input.
  onNameChangeEventHandler(event) {
    // this.setState() atau setState() merupakan fungsi yang digunakan khusus untuk mengubah nilai state di dalam class component. Fungsi inilah yang sebenarnya memicu pemanggilan fungsi render() ketika data di dalam state berubah.
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onGenderChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        gender: event.target.value,
      };
    });
  }

  // event handler untuk menampilkan alert
  onSubmitEventHandler(event) {
    // menghentikan aksi default dari tombol submit
    event.preventDefault();

    const message = `
     Name : ${this.state.name}
     Email : ${this.state.email}
     Gender : ${this.state.gender}
     `;

    alert(message);
  }

  // Setelah menyiapkan state, beri nilai state pada masing-masing <input> dan <select> melalui props value pada fungsi render.
  // gunakan event handler pada masing-masing elemen <input> melalui props onChange. Sehingga, fungsi event handler akan dijalankan dan mengubah nilai state setiap kali ada perubahan data yang dilakukan pengguna pada elemen <input> (termasuk <select>).
  // terapkan event handler onSubmitEventHandler pada element <form> melalui props onSubmit.
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
          />
          <br />

          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.onEmailChangeEventHandler}
          />
          <br />

          <label htmlFor="gender">Gender :</label>
          <select
            id="gender"
            value={this.state.gender}
            onChange={this.onGenderChangeEventHandler}
          >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <MyComponent name="Dicoding" />
    <MyComponent name="John" />
    <MyComponent name="Doe" />

    <CounterApp />

    <MyForm />
  </div>
); //name="Dicoding untuk akses properti yang dibuat.
