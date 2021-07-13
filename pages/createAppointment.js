import Navbar from "./Components/Navbar";
import AppForm from "./Components/AppForm";
import { useState } from "react";
import axios from "axios";
export default function createAppointment() {
  const [form, setValues] = useState({
    name: "",
    surname: "",
    cellphone: "",
    email: "",
    reason: "",
    userId: "",
    payment: false,
  });
  const [fecha, cambiarFecha] = useState(new Date());
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://prog-proyect.vercel.app/api/appointments", form)
      .then((response) => {
        console.log(response);
        window.location.replace("/appointments")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClick = (event) => {
    setValues({
      ...form,
      appointmentDate: fecha,
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Create Appointment</h1>
      <AppForm
        form={form}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        fechaSeleccionada={fecha}
        cambiarFecha={cambiarFecha}
        handleClick={handleClick}
      ></AppForm>
    </div>
  );
}
