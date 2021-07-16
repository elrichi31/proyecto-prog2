import Navbar from "./Components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Router from "next/router";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function listUsers() {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    axios({
      url: "https://prog-proyect.vercel.app/api/users",
      method: "GET",
    })
      .then((response) => {
        return response;
      })
      .then((response) => setListUsers(response.data.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDelete = (id) => {
    const newArr = listUsers.filter((user) => user._id != id);
    setListUsers(newArr);
    axios.delete(`https://prog-proyect.vercel.app/api/users/${id}`).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <Head>
        <title>Pacientes</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1 className={styles.title}>Lista de<font color='blue'> Pacientes</font></h1> 
      {/* Espacio vacio */}
      <div> 
        <h4> </h4> 
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Passport / CI</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Celular</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.passportCI}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.cellphone}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={(e) =>
                      Router.push(
                        "/listUsers/[userId]",
                        `/listUsers/${user._id}`
                      )
                    }
                  >
                    Actualizar
                  </button>{" "}
                  <button className="btn btn-success btn-sm" onClick={(e) => Router.push("/appointments/createAppointment/[userId]", `/appointments/createAppointment/${user._id}`)}>Crear cita</button>{" "}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      handleDelete(user._id);
                    }}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
