
export default function CreateForm({ form, handleSubmit, handleInput }) {
  return (
    <div>
      <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="col-sm-4">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            aria-label="Nombre"
            name="name"
            value={form.name}
            onChange={handleInput}
            id="validationCustom1"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-sm-4">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            aria-label="Apellido"
            name="surname"
            value={form.surname}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-4">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            aria-label="Email"
            name="email"
            value={form.email}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Pasaporte / CI</label>
          <input
            type="text"
            className="form-control"
            aria-label="CI"
            name="passportCI"
            value={form.passportCI}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm">
          <label>Edad</label>
          <input
            type="number"
            className="form-control"
            aria-label="Edad"
            name="age"
            value={form.age}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Estado civil</label>
          <input
            type="text"
            className="form-control"
            aria-label="Estado civil"
            name="civilState"
            value={form.civilState}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Nacionalidad</label>
          <input
            type="text"
            className="form-control"
            aria-label="Nacionalidad"
            name="citizenship"
            value={form.citizenship}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-5">
          <label>Profesión</label>
          <input
            type="text"
            className="form-control"
            aria-label="Profesión"
            name="profession"
            value={form.profession}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Celular</label>
          <input
            type="text"
            className="form-control"
            aria-label="Celular"
            name="cellphone"
            value={form.cellphone}
            onChange={handleInput}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
            value={form.address}
            onChange={handleInput}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Dirección 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            name="address2"
            value={form.address2}
            onChange={handleInput}
          />
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
