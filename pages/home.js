import Button from "./Components/Button";
import styles from "../styles/Home2.module.css";
export default function Home() {
  return (
    <form>
      <h1>Create user</h1>
      <div class="row g-3">
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre"
            aria-label="Nombre"
          />
        </div>
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            placeholder="Apellido"
            aria-label="Apellido"
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            placeholder="CI / Pasaporte"
            aria-label="CI"
          />
        </div>
        <div class="col-sm">
          <input
            type="number"
            class="form-control"
            placeholder="Edad"
            aria-label="Edad"
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            placeholder="Estado civil"
            aria-label="Estado civil"
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            placeholder="Nacionalidad"
            aria-label="Nacionalidad"
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            placeholder="Profesión"
            aria-label="Profesión"
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            placeholder="Celular"
            aria-label="Celular"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Dirección
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Dirección 2
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-3">
          <button type="submit" class="btn btn-primary">Submit</button> 
        </div>
      </div>
    </form>
  );
}
