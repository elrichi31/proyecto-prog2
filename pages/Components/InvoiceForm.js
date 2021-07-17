import Dates from "./Date";

export default function InvoiceForm({
    form,
    handleInput,
    handleSubmit,
    fechaSeleccionada,
    cambiarFecha,
    handleClick,
}) {
    return (
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
            <div className="col-sm-2">
                {/* Fecha tiene el label fecha por eso quito el label del div */}
                {/* <label>Fecha de emisión</label>  */}
                <Dates
                    type="fecha"
                    fechaSeleccionada={fechaSeleccionada}
                    cambiarFecha={cambiarFecha}
                ></Dates>
            </div>

            {/* Agregar numero de factura automatico */}
            <div className="col-sm-2">
                <label>Numero de Factura</label>
                <input
                    type="number"
                    className="form-control"
                    aria-label="invoicenumber"
                    name="invoicenumber"
                    placeholder= "N°"
                    defaultValue={form.invoicenumber}
                    onChange={handleInput}
                    disabled = "True"
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
            <div className="col-6">
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
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Items
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    defaultValue={form.items}
                    onChange={handleInput}
                    name="items"
                ></textarea>
            </div>
            <div className="col-sm-1">
                <label>Subtotal</label>
                <input
                    type="number"
                    className="form-control"
                    aria-label="subtotal"
                    name="subtotal"
                    placeholder="$"
                    defaultValue={form.subtotal}
                    onChange={handleInput}
                />
            </div>
            <div className="col-sm-1">
                <label>Decuento %</label>
                <input
                    type="number"
                    className="form-control"
                    aria-label="Descuento"
                    name="discount"
                    placeholder="0%"
                    defaultValue={form.discount}
                    onChange={handleInput}
                />
            </div>
            <div className="col-sm-1">

                {/* Usar una variable global para el porcentaje de iva */}
                <label>IVA %</label>
                <input
                    type="number"
                    className="form-control"
                    aria-label="iva"
                    name="iva"
                    defaultValue={12}
                    onChange={handleInput}
                    disabled="True"
                />
            </div>

{/* Total automatico */}
            <div className="col-sm-1">
                <label>Total</label>
                <input
                    type="number"
                    className="form-control"
                    aria-label="total"
                    name="total"
                    placeholder="$"
                    defaultValue={form.total}
                    onChange={handleInput}
                />
            </div>


            <div className=" mt-4">
                <button type="submit" className="btn btn-primary" onClick={handleClick}>
                    Guardar
                </button>
            </div>
        </form>
    );
}
