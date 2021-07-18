import Dates from "./Date";
import Router from "next/router";

export default function PerApp({ appointment, handleDelete, color }) {
  return (
    <tr key={appointment._id} className={`table-${color}`}>
      <td align="center">{appointment.name}</td>
      <td align="center">{appointment.surname}</td>
      {/* Falta conectar tratamiento al server */}
      <td align="center">{appointment.tratamiento}</td>
      <td align="center">{appointment.email}</td>
      <td align="center">{appointment.cellphone}</td>
      <td align="center">
        <Dates type="define" define={appointment.appointmentDate}></Dates>
      </td>
      <td align="center">
        <div className="form-check form-switch">
          {appointment.payment ? (
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
          {appointment.userId !== "" ? (
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
        <button className="btn btn-success btn-sm mb-1">Generar Factura</button>{" "}
        <br></br>
        <button
          className="btn btn-danger btn-sm"
          onClick={(e) => {
            handleDelete(appointment._id);
          }}
        >
          Borrar
        </button>{" "}
        {appointment.userId === "" ? (
          <button
            className="btn btn-info btn-sm"
            onClick={(e) =>
              Router.push(
                "/listUsers/createUser/[appointmentId]",
                `/listUsers/createUser/${appointment._id}`
              )
            }
          >
            Crear usuario
          </button>
        ) : null}
      </td>
    </tr>
  );
}
