import { useState } from "react";
import Navbar from "./Components/Navbar";
export default function createUser() {
  const [form, setValues] = useState({
    name: "",
    email: "",
    surname: "",
    passportCI: "",
    age: 0,
    civilState: "",
    citizenship: "",
    profession: "",
    cellphone: "",
    address: "",
    address2: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Create user</h1>
      <form
        className="row g-3 needs-validation"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            aria-label="Nombre"
            name="name"
            value={form.name}
            // defaultValue="nick"
            onChange={handleInput}
            id="validationCustom1"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Apellido"
            aria-label="Apellido"
            name="surname"
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            name="email"
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            placeholder="CI / Pasaporte"
            aria-label="CI"
            name="passportCI"
            onChange={handleInput}
          />
        </div>
        <div className="col-sm">
          <input
            type="number"
            className="form-control"
            placeholder="Edad"
            aria-label="Edad"
            name="age"
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            placeholder="Estado civil"
            aria-label="Estado civil"
            name="civilState"
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nacionalidad"
            aria-label="Nacionalidad"
            name="citizenship"
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            placeholder="Profesión"
            aria-label="Profesión"
            name="profession"
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            placeholder="Celular"
            aria-label="Celular"
            name="cellphone"
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
