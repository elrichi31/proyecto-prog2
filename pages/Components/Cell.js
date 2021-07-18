export default function Cell({form, handleInput, name, defaultValue, handleBlur2}) {
  return (
    <div className="input-group">
      <div className="col-sm-2">
        <input
          type="number"
          className="form-control"
          aria-label="quantity"
          name="quantity"
          defaultValue={0}
          placeholder="Cantidad"
          onBlur={handleInput}
          onKeyUp={e => {console.log(e.target.name, e.target.value)}}
          id="validationCustom1"
        />
      </div>
      <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          aria-label="celular"
          name="item"
          placeholder="Descripcion"
          onBlur={handleInput}
          id="validationCustom1"
          
        />
      </div>
      <div className="col-sm-2">
        <input
          type="number"
          className="form-control"
          aria-label="celular"
          name="price"
          placeholder="Precio unitario"
          onBlur={handleInput}
          id="validationCustom1"
          
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
          
        />
      </div>
    </div>
  );
}
