import Navbar from "./Components/Navbar";
import InvoiceForm from "./Components/InvoiceForm";
import { useState } from "react";
import axios from "axios";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function createInvoice() {
  const [form, setValues] = useState({
    //   Fecha
    invoicenumber: "", //Revisar numero automatico
    name: "",
    surname: "",
    passportCI: "", //Revisar CI
    cellphone: "",
    address: "", //revisar direccion
    items: "", //revisar o crear objeto de items con precio
    discount: "", //revisar
    //sub total, iva y total se calculan automatico, no se si se deban poner aqui
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
      .post("https://prog-proyect.vercel.app/api/invoice", form)
      .then((response) => {
        console.log(response);
        window.location.replace("/invoice")
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
        <title>Facturar</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="mb-4">
      <h1 className={styles.title}>Crear<font color='blue'> factura</font></h1> 
      </div>
      

      {/* <InvoiceForm
        form={form}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        fechaSeleccionada={fecha}
        cambiarFecha={cambiarFecha}
        handleClick={handleClick}
      ></InvoiceForm> */}
    </div>
  );
}
