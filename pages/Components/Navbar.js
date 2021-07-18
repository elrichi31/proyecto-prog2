import styles from "../../styles/navbar.module.css";
import Link from "next/link";

// Componente de barra de navegacion con referencia a los demas apartados y presente en todas las paginas
export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.container}`}>
      <div className="container-fluid">
        <a className="navbar-brand text-reset" href="/">
          {" "}
          <img id="logo" src="/logo.png" width="50" height="50" /> Denta
          <font color="blue">List</font>{" "}
        </a>
        <div className="collapse d-flex justify-content-end navbar-collapse">
          <ul className="navbar-nav">
            <li className={`nav-item ${styles.nav_item}`}>
              <Link href="/createAppointment">
                <a className="nav-link text-reset">Agendar cita</a>
              </Link>
            </li>
            <li className={`nav-item ${styles.nav_item}`}>
              <Link href="/appointments">
                <a className="nav-link text-reset">Citas</a>
              </Link>
            </li>
            <li className={`nav-item ${styles.nav_item}`}>
              <Link href="/createUser">
                <a className="nav-link text-reset">Crear usuario</a>
              </Link>
            </li>
            <li className={`nav-item ${styles.nav_item}`}>
              <Link href="/listUsers">
                <a className="nav-link text-reset">Pacientes</a>
              </Link>
            </li>
            <li className={`nav-item ${styles.nav_item}`}>
              <Link href="/createInvoice">
                <a className="nav-link text-reset">Facturar</a>
              </Link>
            </li>
            {/*Plantilla para la posible extension almacenando facturas (mas alla de los objetivos)  */}

            {/* <li className={`nav-item ${styles.nav_item}`}>
              <Link href="/invoice">
                <a className="nav-link text-reset">Facturas</a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
