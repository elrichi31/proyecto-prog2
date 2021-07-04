import Navbar from "./Components/Navbar";
import Dates from "./Components/Date";

export default function appointments() {
  const arr = [10, 3, 5, 6];
  let pago = true;
  let color = ""
  if(pago){
    color = "success"
  } else {
      color = "danger"
  }
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
          {arr.map((id) => {
            return (
              <tr key={id} className={`table-${color}`}>
                <td>Mark</td>
                <td>Otto</td>
                <td>nick1201@gmail.com</td>
                <td>0996584479</td>
                <td>
                  <Dates type="define"></Dates>
                </td>
                <td>
                  <div class="form-check form-switch">
                      {
                          pago ? <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" checked disabled/>
                          : <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled/>
                      }
                  </div>
                </td>
                <td>
                  <button className="btn btn-primary btn-block">
                    Actualizar
                  </button>{" "}
                  <button className="btn btn-success">Generar Factura</button>{" "}
                  <button className="btn btn-danger">Borrar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
