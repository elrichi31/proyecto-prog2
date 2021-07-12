import Navbar from "./Components/Navbar";
import Dates from "./Components/Date";
import axios from "axios";
import { useState, useEffect } from "react";
import Router from "next/router";
export default function appointments() {
  let pago = true;
  let color = "";
  if (pago) {
    color = "success";
  } else {
    color = "danger";
  }
  const [app, setApp] = useState([]);
  useEffect(() => {
    axios
      .get("https://prog-proyect.vercel.app/api/appointments")
      .then((response) => setApp(response.data.data))
      .catch((error) => {
        return error;
      });
  }, []);
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
            return (
              <tr key={appointment._id} className={`table-${color}`}>
                <td align="center">{appointment.name}</td>
                <td align="center">{appointment.surname}</td>
                <td align="center">{appointment.email}</td>
                <td align="center">{appointment.cellphone}</td>
                <td align="center">
                  <Dates
                    type="define"
                    define={appointment.appointmentDate}
                  ></Dates>
                </td>
                <td align="center">
                  <div className="form-check form-switch">
                    {pago ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDisabled"
                        checked
                        disabled
                      />
                    ) : (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDisabled"
                        disabled
                      />
                    )}
                  </div>
                </td>
                <td align="center">
                  <div className="form-check form-switch">
                    {pago ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDisabled"
                        checked
                        disabled
                      />
                    ) : (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDisabled"
                        disabled
                      />
                    )}
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-block btn-sm mb-1"
                    onClick={(e) =>
                      Router.push(
                        "/appointments/[appointmentId]",
                        `/appointments/${appointment._id}`
                      )
                    }
                  >
                    Actualizar
                  </button>{" "}
                  <button className="btn btn-success btn-sm mb-1">
                    Generar Factura
                  </button>{" "}
                  <br></br>
                  <button className="btn btn-danger btn-sm">Borrar</button>{" "}
                  <button className="btn btn-info btn-sm">Crear usuario</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
