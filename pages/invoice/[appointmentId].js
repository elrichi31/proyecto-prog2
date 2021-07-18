import Navbar from "../Components/Navbar";
import InvoiceForm from "../Components/InvoiceForm";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { saveAs } from "file-saver";
import styles from "../../styles/Home.module.css";

export default function createInvoice() {
  const router = useRouter();
  const id = router.query;
  const [form, setValues] = useState({
    name: "",
    surname: "",
    passportCI: "",
    cellphone: "",
    address: "",
    discount: "",
    userId: "",
    item_1: "",
    item_2: "",
    item_3: "",
    item_4: "",
    quantity_1: "",
    quantity_2: "",
    quantity_3: "",
    quantity_4: "",
    price_1: "",
    price_2: "",
    price_3: "",
    price_4: "",
  });
  useEffect(() => {
    axios
      .get(`https://prog-proyect.vercel.app/api/appointments/${id.appointmentId}`)
      .then((response) => {
        setValues({
          name: response.data.data[0].name,
          surname: response.data.data[0].surname,
          passportCI: "",
          cellphone: response.data.data[0].cellphone,
          email: response.data.data[0].email,
          address: "",
          discount: "",
          userId: "",
          item_1: "",
          item_2: "",
          item_3: "",
          item_4: "",
          quantity_1: "",
          quantity_2: "",
          quantity_3: "",
          quantity_4: "",
          price_1: "",
          price_2: "",
          price_3: "",
          price_4: "",
          _id: id.appointmentId,
        });
      });
  }, []);
  const [fecha, cambiarFecha] = useState(new Date());
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    axios
      .put(`https://prog-proyect.vercel.app/api/appointments/${id.appointmentId}`, {
        payment: true,
      })
      .then(() => {
        axios.post(`https://prog-proyect.vercel.app/api/download`, form).then(() => {
          axios
            .get("https://prog-proyect.vercel.app/api/download", { responseType: "blob" })
            .then((response) => {
              const pdfBlob = new Blob([response.data], {
                type: "application/pdf",
              });
              saveAs(pdfBlob, "newPDF.pdf");
              window.location.replace("/appointments")
            })
            .catch((error) => {
              console.log(error);
            });
        }).catch((error) => {console.log(error)});
      }).catch((error) => {console.log(error)});
  };
  const handleClick = (event) => {
    setValues({
      ...form,
      appointmentDate: fecha,
    });
  };
  const handleBlur = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
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
        <h1 className={styles.title}>
          Crear<font color="blue"> factura</font>
        </h1>
      </div>

      <InvoiceForm
        form={form}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        fechaSeleccionada={fecha}
        cambiarFecha={cambiarFecha}
        handleClick={handleClick}
        handleBlur={handleBlur}
      ></InvoiceForm>
    </div>
  );
}
createInvoice.getInitialProps = async (ctx) => {
  const appointmentId = ctx.query;
  return { appointmentId: appointmentId };
};
