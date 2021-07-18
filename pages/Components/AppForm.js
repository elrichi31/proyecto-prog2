import Dates from "./Date";

// Componente que contiene los campos y su formato para la creacion de citas
//Cada div es un nuevo campo, la propiedad col-sm indica cuantas columnas ocupa
export default function AppForm({
  form,
  handleInput,
  handleSubmit,
  fechaSeleccionada,
  cambiarFecha,
  handleClick,
}) {
  return (
    <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
      <div className="col-sm-3">
        <label>Nombre</label>
        <input
          type="text"
          className="form-control"
          aria-label="Nombre"
          name="name"
          defaultValue={form.name}
          onChange={handleInput}
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
          name="surname"
          defaultValue={form.surname}
          onChange={handleInput}
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
          name="cellphone"
          defaultValue={form.cellphone}
          onChange={handleInput}
          id="validationCustom1"
          required
        />
      </div>
      <div className="col-sm-3">
        <label>Fecha de la cita</label>
        <Dates
          type="fechaHora"
          fechaSeleccionada={fechaSeleccionada}
          cambiarFecha={cambiarFecha}
        ></Dates>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          defaultValue={form.email}
          onChange={handleInput}
          name="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Tratamiento
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          defaultValue={form.reason}
          onChange={handleInput}
          name="tratamiento"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Razón de la cita
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          defaultValue={form.reason}
          onChange={handleInput}
          name="reason"
        ></textarea>
      </div>
      <div className="col-3">
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
}
