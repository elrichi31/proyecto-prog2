
//Componente de los items de las facturas
export default function Cell({form, handleInput, name, defaultValue, handleBlur2}) {

  return (
    <div className="input-group">
      <div className="col-sm-2">
        <input
          type="number"
          className="form-control"
          aria-label="quantity"
          name={"quantity_" + name}
          placeholder="Cantidad"
          onBlur={handleInput}
          id="validationCustom1"
        />
      </div>
      <div className="col-sm">
        <input
          type="text"
          className="form-control"
          aria-label="celular"
          name={"item_" + name}
          placeholder="Descripcion"
          onBlur={handleInput}
          id="validationCustom1"
          
        />
      </div>
      <div className="col-sm-2">
        <input
        step="any"
          type="number"
          className="form-control"
          aria-label="celular"
          name={"price_" + name}
          placeholder="Precio unitario"
          onBlur={handleInput}
          id="validationCustom1"
          
        />
      </div>
    </div>
  );
}
