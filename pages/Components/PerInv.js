import Dates from "./Date";
import Router from "next/router";

// Plantilla similar a perAPP, serviria para mostrar cada una de las facturas guardadas
// esto es una posible ampliacion (extra, va mas alla de los objetivos)

export default function PerInv({ invoice, handleDelete, color }) {
  return (
    <tr key={invoice._id} className={`table-${color}`}>
    {/* Revisar numero y total*/}
      <td align="center">{invoice.invoicenumber}</td> 
      <td align="center">{invoice.total}</td>

      <td align="center">{invoice.name}</td>
      <td align="center">{invoice.surname}</td>
      <td align="center">{invoice.email}</td>
      <td align="center">{invoice.cellphone}</td>

      {/* Revisar fecha de appointmen a invoice */}
      <td align="center">
        <Dates type="define" define={invoice.appointmentDate}></Dates>
      </td>
      {/* Editar las rutas de los botones de appointments a invoice */}
      <td>
        <button
          className="btn btn-primary btn-block btn-sm mb-1"
          onClick={(e) =>
            Router.push(
              "/appointments/[appointmentId]",
              `/appointments/${invoice._id}`
            )
          }
        >
          Actualizar
        </button>{" "}
        <button className="btn btn-success btn-sm mb-1">Generar Factura</button>{" "}
        <br></br>
        <button
          className="btn btn-danger btn-sm"
          onClick={(e) => {
            handleDelete(invoice._id);
          }}
        >
          Borrar
        </button>{" "}
        {/* No es necesario crear usuario de facturas */}
      </td>
    </tr>
  );
}
