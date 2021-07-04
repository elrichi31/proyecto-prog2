import Navbar from "./Components/Navbar";
import Dates from './Components/Date'
export default function createAppointment() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Create Appointment</h1>
      <form className="row g-3 needs-validation">
        <div className="col-sm-3">
            <label>Nombre</label>
            <input
                type="text"
                className="form-control"
                aria-label="Nombre"
                name="name"
                // defaultValue="nick"
                id="validationCustom1"
                required
                />
        </div>
        <div className="col-sm-3">
            <label>Apellido</label>
            <input
                type="text"
                className="form-control"
                aria-label="Apellido"
                name="apellido"
                // defaultValue="nick"
                id="validationCustom1"
                required
                />
        </div>
        <div className="col-sm-3">
            <label>Celular</label>
            <input
                type="text"
                className="form-control"
                aria-label="celular"
                name="celular"
                // defaultValue="nick"
                id="validationCustom1"
                required
                />
        </div>
        <div className="col-sm-3">
            <label>Fecha de la cita</label>
            <Dates type="fechaHora"></Dates>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
            </label>
            <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Razón de la cita
            </label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            ></textarea>
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
