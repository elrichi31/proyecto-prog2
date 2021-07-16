import Navbar from "./Components/Navbar";
import AppForm from "./Components/AppForm";
import { useState } from "react";
import axios from "axios";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function createAppointment() {
  const [form, setValues] = useState({
    name: "",
    surname: "",
    cellphone: "",
    email: "",
    reason: "",
    tratamiento: "",
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
      <Head>
        <title>Agendar cita</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1 className={styles.title}>Agendar<font color='blue'> cita</font></h1> 
      {/* Espacio vacio */}
      <div> 
        <h4> </h4> 
      </div>

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
