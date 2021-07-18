import Navbar from "./Components/Navbar";
import AppForm from "./Components/AppForm";
import { useState } from "react";
import axios from "axios";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Pagina correspondiente a crear citas

export default function createAppointment() {
  const [form, setValues] = useState({
    // Estos son todos los valores por defecto de los campos
    name: "",
    surname: "",
    cellphone: "",
    email: "",
    reason: "",
    tratamiento: "",
    userId: "",
    payment: false,
  });
  //Las fechas se manejan de forma especial (nuevo objeto) para poder guardar la info en la base de datos (nube)
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
        {/* Para que la pestaña tenga nombre y logo de la app */}
        <title>Agendar cita</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/*Titulo con estilo global  */}
      <div className="mb-4">
      <h1 className={styles.title}>Agendar<font color='blue'> cita</font></h1> 
      </div>
      
{/* Usamos el componente appform donde estan guardados todos los campos (esto incluye su formato) */}
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
