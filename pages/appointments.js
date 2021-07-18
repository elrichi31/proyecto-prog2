import Navbar from "./Components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import PerApp from "./Components/PerApp";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function appointments() {
  const [app, setApp] = useState([]);
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
  return (
    <div>
      <Navbar></Navbar>
      <Head>
        <title>Citas</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="mb-4">
        <h1 className={styles.title}>Lista de<font color='blue'> Citas</font></h1>
      </div>


      
      
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
            app.map((appointment) => {
              if (new Date(appointment.appointmentDate).getDate() === new Date().getDate() & new Date(appointment.appointmentDate).getMonth() === new Date().getMonth()) {
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
      <h3>Mañana</h3>
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
                new Date(appointment.appointmentDate).getMonth() > new Date().getMonth()
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
                new Date().getDate() - 1
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
                new Date(appointment.appointmentDate).getDate() < new Date().getDate() + 2 ||
                new Date(appointment.appointmentDate).getMonth() < new Date().getMonth()
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
