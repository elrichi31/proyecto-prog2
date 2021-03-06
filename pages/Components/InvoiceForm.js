import Dates from "./Date";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Cell from "./Cell";

// Componente con los campos y formato de crear factura/facturar
export default function InvoiceForm({
  form,
  handleInput,
  handleSubmit,
  fechaSeleccionada,
  cambiarFecha,
  handleClick,
  handleBlur,
  handleBlur2
}) {
  return (
    <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
      <div className="col-sm-2">
        <div className="col-sm">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Fecha emision"
            value={fechaSeleccionada}
            onChange={cambiarFecha}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
      </div>

      {/* Agregar numero de factura automatico */}
      <div className="col-sm-2">
        <label>Numero de Factura</label>
        <input
          type="number"
          className="form-control"
          aria-label="invoicenumber"
          name="invoicenumber"
          placeholder="N°"
          defaultValue={form.invoicenumber}
          onChange={handleInput}
          disabled="True"
        />
      </div>
      <div className="col-sm-3">
        <label>Nombres</label>
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
        <label>Apellidos</label>
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
      <div className="col-sm-2">
        <label>Pasaporte / CI / RUC</label>
        <input
          type="text"
          className="form-control"
          aria-label="CI"
          name="passportCI"
          defaultValue={form.passportCI}
          onChange={handleInput}
        />
      </div>

      <div className="col-sm-3">
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
      <div className="col-sm-6">
        <label htmlFor="inputAddress" className="form-label">
          Dirección
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
          name="address"
          defaultValue={form.address}
          onChange={handleInput}
        />
      </div>

      <div className=" col-sm-3">
        <label className="form-label">Celular</label>
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
      <Cell form={form} handleInput={handleBlur} name='1'></Cell>
      <Cell form={form} handleInput={handleBlur} name='2'></Cell>
      <Cell form={form} handleInput={handleBlur} name='3'></Cell>
      <Cell form={form} handleInput={handleBlur} name='4'></Cell>
      <div className=" col-sm-1">
        <label className="form-label">Descuento</label>
        <input
          type="number"
          className="form-control"
          aria-label="celular"
          name="discount"
          placeholder="%"
          onChange={handleInput}
          id="validationCustom1"
          required
        />
      </div>

      {/* Conectar boton generar factura con PDFKIT */}
      <div className=" mt-3 mb-3">
        <button className="btn btn-success" type="submit">Generar Factura</button>{" "}
      </div>
    </form>
  );
}
