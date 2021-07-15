import Navbar from "./Components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import PerApp from "./Components/PerApp";
export default function appointments() {
  const [app, setApp] = useState([]);
  useEffect(() => {
    axios
      .get("https://prog-proyect.vercel.app/api/appointments")
      .then((response) => {
        setApp(response.data.data);
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
      <h1>Appointments</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Nombre
            </th>
            <th scope="col" className="text-center">
              Apellido
            </th>
            <th scope="col" className="text-center"> {/* Arreglar columna */}
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
          {app.map((appointment) => {
            if (appointment.payment) {
              return (
                <PerApp appointment={appointment} handleDelete={handleDelete} color="success" key={appointment._id}></PerApp>
              );
            } else {
              return (
                <PerApp appointment={appointment} handleDelete={handleDelete} color="danger" key={appointment._id}></PerApp>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
