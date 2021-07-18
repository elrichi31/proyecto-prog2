//Componente de los items de las facturas
export default function Cell({form, handleInput, name, }) {
  return (
    <div className="input-group">
      <div className="col-sm-2">
        <input
          type="number"
          className="form-control"
          aria-label="celular"
          name={`cantidad_${name}`}
          placeholder="Cantidad"
          defaultValue={form.cellphone}
          onChange={handleInput}
          id="validationCustom1"
          required
        />
      </div>
      <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          aria-label="celular"
          name={`des_${name}`}
          placeholder="Descripcion"
          defaultValue={form.cellphone}
          onChange={handleInput}
          id="validationCustom1"
          required
        />
      </div>
      <div className="col-sm-2">
        <input
          type="number"
          className="form-control"
          aria-label="celular"
          name={`price_${name}`}
          placeholder="Precio unitario"
          defaultValue={form.cellphone}
          onChange={handleInput}
          id="validationCustom1"
          required
        />
      </div>
      <div className="col-sm-2">
        <input
          type="number"
          className="form-control"
          aria-label="celular"
          name={`total_${name}`}
          placeholder="Total"
          defaultValue={form.cellphone}
          onChange={handleInput}
          id="validationCustom1"
          required
        />
      </div>
    </div>
  );
}
