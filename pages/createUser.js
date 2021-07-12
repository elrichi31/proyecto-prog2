import { useState } from "react";
import Navbar from "./Components/Navbar";
import CreateForm from './Components/CreateForm'
import axios from 'axios'
export default function createUser() {
  const [form, setValues] = useState({
    name: "",
    email: "",
    surname: "",
    passportCI: "",
    age: 0,
    civilState: "",
    citizenship: "",
    profession: "",
    cellphone: "",
    address: "",
    address2: "",
  });
  const handleSubmit = (event) => {
    axios.post(`https://prog-proyect.vercel.app/api/users`, {
        name: form.name,
        email: form.email,
        surname: form.surname,
        passportCI: form.passportCI,
        age: form.age,
        civilState: form.civilState,
        citizenship: form.citizenship,
        profession: form.profession,
        cellphone: form.cellphone,
        address: form.address,
        address2: form.address2,
    })
        .then(response => {
          console.log(response)
          window.location.replace("/listUsers")
        })
        .catch((error) => {
            console.log(error)
        })
    event.preventDefault();
  }
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Create user</h1>
      <CreateForm form={form} handleSubmit={handleSubmit} handleInput={handleInput}></CreateForm>
    </div>
  );
}
