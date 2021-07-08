import Navbar from "./Components/Navbar";
import Dates from "./Components/Date";
import axios from 'axios';
import {useState, useEffect} from 'react'
export default function appointments() {
  const arr = [10, 3, 5, 6];
  let pago = true;
  let color = ""
  if(pago){
    color = "success"
  } else {
      color = "danger"
  }
  const [app, setApp] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:4000/api/appointments').then(response => setApp(response.data.data)).catch(error => {return error})
  }, [])
  console.log(app)
  return (
    <div>
      <Navbar></Navbar>
      <h1>Appointments</h1>
      <table className="table"> 
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Celular</th>
            <th scope="col">Dia de la cita</th>
            <th scope="col">Pago</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {app.map((appointment) => {
            return (
              <tr key={appointment._id} className={`table-${color}`}>
                <td>{appointment.name}</td>
                <td>{appointment.surname}</td>
                <td>{appointment.email}</td>
                <td>{appointment.cellphone}</td>
                <td>
                  <Dates type="define" define={appointment.appointmentDate}></Dates>
                </td>
                <td>
                  <div className="form-check form-switch">
                      {
                          pago ? <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" checked disabled/>
                          : <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled/>
                      }
                  </div>
                </td>
                <td>
                  <button className="btn btn-primary btn-block btn-sm mb-1">
                    Actualizar
                  </button>{" "}
                  <button className="btn btn-success btn-sm mb-1">Generar Factura</button>{" "} <br></br>
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
