import Dates from './Date'

export default function AppForm({form, handleInput, handleSubmit, fechaSeleccionada, cambiarFecha, handleClick}) {
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
          defaultValue={form.apellido}
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
          defaultValue={form.celular}
          onChange={handleInput}
          id="validationCustom1"
          required
        />
      </div>
      <div className="col-sm-3">
        <label>Fecha de la cita</label>
        <Dates type="fechaHora" fechaSeleccionada={fechaSeleccionada} cambiarFecha={cambiarFecha}></Dates>
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
          defaultValue={form.email}
          onChange={handleInput}
          name="email"
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
