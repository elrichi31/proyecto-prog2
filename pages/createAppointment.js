import Navbar from "./Components/Navbar";
import AppForm from './Components/AppForm'
import { useState } from "react";
import axios from "axios";
export default function createAppointment() {
  const [form, setValues] = useState({
    name: "",
    surname: "",
    cellphone: "",
    email: "",
    reason: ""
  })
  const [fecha, cambiarFecha] = useState(new Date())
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post("http://localhost:4000/api/appointments", form).then((response) => {console.log(response)}).catch((error) => {console.log(error)})
    console.log(form)
    console.log(fecha)
  }
  const handleClick = (event) => {
    setValues({
      ...form,
      appointmentDate: fecha
    })
  }
  return (
    <div>
      <Navbar></Navbar>
      <h1>Create Appointment</h1>
      <AppForm form={form} handleInput={handleInput} handleSubmit={handleSubmit} fechaSeleccionada={fecha} cambiarFecha={cambiarFecha} handleClick={handleClick}></AppForm>
    </div>
  );
}
