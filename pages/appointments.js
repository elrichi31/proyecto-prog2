import Navbar from "./Components/Navbar"; //Barra de navegacion
import axios from "axios"; //Conexion al server
import { useState, useEffect } from "react";
import PerApp from "./Components/PerApp"; //Estructura de la tabla de las citas
import Head from 'next/head' //Para el title
import styles from '../styles/Home.module.css' //Estilo global
import {saveAs} from "file-saver"


// Pagina de lista de citas

export default function appointments() {
  const [app, setApp] = useState([]);
  const [user, setUser] = useState()

  useEffect(() => {
    axios
      .get("https://prog-proyect.vercel.app/api/appointments")
      .then((response) => {
        const sortedDate = response.data.data
          .slice()
          .sort(
            (a, b) =>
              new Date(a.appointmentDate).getTime() -
              new Date(b.appointmentDate).getTime()
          );
        setApp(sortedDate);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  const handleDelete = (id) => {
    const newArr = app.filter((user) => user._id != id);
    setApp(newArr);
    axios
      .delete(`https://prog-proyect.vercel.app/api/appointments/${id}`)
      .then((response) => {
        console.log(response);
      });
  };
  const handleDownload = (user) => {
    axios.post('http://localhost:4000/api/download', user).then((response) => {
      axios.get('http://localhost:4000/api/download', {responseType: 'blob'})
      .then((response) => {
        const pdfBlob = new Blob([response.data], {type: 'application/pdf'})
        saveAs(pdfBlob, 'newPDF.pdf')
      }).catch((error) => {console.log(error)})
    }).catch((error) => {console.log(error)})
  }
  return (
    <div>
      <Navbar></Navbar>
      <Head>
        <title>Citas</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Titulo con estilo global */}
      <div className="mb-4">
        <h1 className={styles.title}>Lista de<font color='blue'> Citas</font></h1>
      </div>


      
      {/* Seccion de citas de hoy, esta logica se repite en las demas secciones pero los if son solamente para cambiar el orden y los filtros (dias) */}
      <h3>Hoy</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Nombre
            </th>
            <th scope="col" className="text-center">
              Apellido
            </th>
            <th scope="col" className="text-center">
              {" "}
              {/* Arreglar columna */}
              Tratamiento
            </th>
            <th scope="col" className="text-center">
              Email
            </th>
            <th scope="col" className="text-center">
              Celular
            </th>
            <th scope="col" className="text-center">
              Dia de la cita
            </th>
            <th scope="col">Pago</th>
            <th scope="col">Registrado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            // Mapeo automatico de todos los elementos de appointment (campos de las citas)
            app.map((appointment) => {
              if (new Date(appointment.appointmentDate).getDate() === new Date().getDate() & new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()) {
                if (appointment.payment) {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="success"
                      key={appointment._id}
                      handleDownload={handleDownload}
                    ></PerApp>
                  );
                } else {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="danger"
                      key={appointment._id}
                      handleDownload={handleDownload}
                    ></PerApp>
                  );
                }
              } else if (
                new Date(appointment.appointmentDate).getDate() > new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() > new Date().getMonth()
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() ===
                new Date().getDate() - 1
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() === new Date().getDate() + 1 &&
                new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() < new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() < new Date().getMonth()
              ) {
                return (null)
              }
            })
          }
        </tbody>
      </table>
      {/* Seccion de citas de ma??ana */}
      <h3>Ma??ana</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Nombre
            </th>
            <th scope="col" className="text-center">
              Apellido
            </th>
            <th scope="col" className="text-center">
              
              {/* Arreglar columna */}
              Tratamiento
            </th>
            <th scope="col" className="text-center">
              Email
            </th>
            <th scope="col" className="text-center">
              Celular
            </th>
            <th scope="col" className="text-center">
              Dia de la cita
            </th>
            <th scope="col">Pago</th>
            <th scope="col">Registrado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            // Logica para filtar y ordenar las citas
            app.map((appointment) => {
              if (new Date(appointment.appointmentDate).getDate() === new Date().getDate() & new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() > new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() > new Date().getMonth()
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() ===
                new Date().getDate() - 1
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() === new Date().getDate() + 1 &&
                new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()
              ) {
                if (appointment.payment) {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="success"
                      key={appointment._id}
                    ></PerApp>
                  );
                } else {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="danger"
                      key={appointment._id}
                    ></PerApp>
                  );
                }
              } else if (
                new Date(appointment.appointmentDate).getDate() < new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() < new Date().getMonth()
              ) {
                return (null)
              }
            })
          }
        </tbody>
      </table>
      {/* Citas con fecha = today+2 */}
      <h3>Citas Futuras</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Nombre
            </th>
            <th scope="col" className="text-center">
              Apellido
            </th>
            <th scope="col" className="text-center">
              {" "}
              {/* Arreglar columna */}
              Tratamiento
            </th>
            <th scope="col" className="text-center">
              Email
            </th>
            <th scope="col" className="text-center">
              Celular
            </th>
            <th scope="col" className="text-center">
              Dia de la cita
            </th>
            <th scope="col">Pago</th>
            <th scope="col">Registrado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            app.map((appointment) => {
              if (new Date(appointment.appointmentDate).getDate() === new Date().getDate() & new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() > new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() > new Date().getMonth() || new Date(appointment.appointmentDate).getYear() > new Date().getYear()
              ) {
                if (appointment.payment) {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="success"
                      key={appointment._id}
                    ></PerApp>
                  );
                } else {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="danger"
                      key={appointment._id}
                    ></PerApp>
                  );
                }
              } else if (
                new Date(appointment.appointmentDate).getDate() ===
                new Date().getDate() - 1
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() === new Date().getDate() + 1 &&
                new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() < new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() < new Date().getMonth()
              ) {
                return (null)
              }
            })
          }
        </tbody>
      </table>
      <hr></hr>
      {/* Citas de ayer con fecha = today-1 */}
      <h3>Ayer</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Nombre
            </th>
            <th scope="col" className="text-center">
              Apellido
            </th>
            <th scope="col" className="text-center">
              {" "}
              {/* Arreglar columna */}
              Tratamiento
            </th>
            <th scope="col" className="text-center">
              Email
            </th>
            <th scope="col" className="text-center">
              Celular
            </th>
            <th scope="col" className="text-center">
              Dia de la cita
            </th>
            <th scope="col">Pago</th>
            <th scope="col">Registrado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            app.map((appointment) => {
              if (new Date(appointment.appointmentDate).getDate() === new Date().getDate() & new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() > new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() > new Date().getMonth()
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() ===
                new Date().getDate() - 1 & new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()
              ) {
                if (appointment.payment) {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="success"
                      key={appointment._id}
                    ></PerApp>
                  );
                } else {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="danger"
                      key={appointment._id}
                    ></PerApp>
                  );
                }
              } else if (
                new Date(appointment.appointmentDate).getDate() === new Date().getDate() + 1 &&
                new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() < new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() < new Date().getMonth()
              ) {
                return (null)
              }
            })
          }
        </tbody>
      </table>

      {/*Idea: Mas recientes primero */}
      {/* Citas con fecha = today -2 o menor */}
      <h3>Citas anteriores</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Nombre
            </th>
            <th scope="col" className="text-center">
              Apellido
            </th>
            <th scope="col" className="text-center">
              {" "}
              {/* Arreglar columna */}
              Tratamiento
            </th>
            <th scope="col" className="text-center">
              Email
            </th>
            <th scope="col" className="text-center">
              Celular
            </th>
            <th scope="col" className="text-center">
              Dia de la cita
            </th>
            <th scope="col">Pago</th>
            <th scope="col">Registrado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            app.map((appointment) => {
              if (new Date(appointment.appointmentDate).getDate() === new Date().getDate() & new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() > new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() > new Date().getMonth()
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() ===
                new Date().getDate() - 1
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getDate() === new Date().getDate() + 1 &&
                new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()
              ) {
                return (null)
              } else if (
                new Date(appointment.appointmentDate).getFullYear() < new Date().getFullYear() ||
                new Date(appointment.appointmentDate).getMonth() < new Date().getMonth() || new Date(appointment.appointmentDate).getDay() < new Date().getDay() + 2
              ) {
                if (appointment.payment) {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="success"
                      key={appointment._id}
                    ></PerApp>
                  );
                } else {
                  return (
                    <PerApp
                      appointment={appointment}
                      handleDelete={handleDelete}
                      color="danger"
                      key={appointment._id}
                    ></PerApp>
                  );
                }
              }
            })
          }
        </tbody>
      </table>
    </div>
  );
}
