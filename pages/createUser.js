import { useState } from "react";
import Navbar from "./Components/Navbar";
import CreateForm from "./Components/CreateForm";
import axios from "axios";
export default function createUser() {
  const [fechaRegistro, cambiarFechaRegistro] = useState(new Date());
  const [fechaNacimiento, cambiarFechaNacimiento] = useState(new Date());
  function getEdad(dateString) {
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())){
      edad--
    }
    return edad
  }
  const [formCheck, setFormCheck] = useState({});
  const [form, setValues] = useState({
    history: {},
    // registrodate: "",
    // // name: "",
    // email: "",
    // surname: "",
    // passportCI: "",
    // age: 0,
    // civilState: "",
    // citizenship: "",
    // profession: "",
    // cellphone: "",
    // address: "",
    // address2: "",
  });
  const handleSubmit = (event) => {
    console.log(form);
    // axios.post(`https://prog-proyect.vercel.app/api/users`, {
    //     registroDate: form.registrodate,
    //     // name: form.name,
    //     email: form.email,
    //     surname: form.surname,
    //     passportCI: form.passportCI,
    //     age: form.age,
    //     civilState: form.civilState,
    //     citizenship: form.citizenship,
    //     profession: form.profession,
    //     cellphone: form.cellphone,
    //     address: form.address3,
    //     address2: form.address2,
    // })
    //     .then(response => {
    //       console.log(response)
    //       window.location.replace("/listUsers")
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    event.preventDefault();
  };
  const handleInput = (event) => {
    setValues({
      ...form,
      history: {
        ...formCheck,
      },
      [event.target.name]: event.target.value,
    });
  };
  const handleBlur = (event) => {
    setValues({
      ...form,
      age: getEdad(fechaNacimiento)
    })
  }
  const handleChange = (event) => {
    setValues({age: getEdad(fechaNacimiento)})
    setFormCheck({
      ...formCheck,
      [event.target.name]: event.target.checked,
    });
  };
  const handleClick = (event) => {
    setValues({
      ...form,
      history: {
        ...formCheck,
      },
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Crear usuario</h1>
      <CreateForm
        form={form}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        handleChange={handleChange}
        handleClick={handleClick}
        fechaRegistro={fechaRegistro}
        cambiarFechaRegistro={cambiarFechaRegistro}
        fechaNacimiento={fechaNacimiento}
        cambiarFechaNacimiento={cambiarFechaNacimiento}
        handleBlur={handleBlur}
      ></CreateForm>
    </div>
  );
}
