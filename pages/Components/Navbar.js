import styles from '../../styles/navbar.module.css';
import Link from 'next/link'


export default function Navbar(){
    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${styles.container}`}>
            <div className="container-fluid">
                <a className="navbar-brand text-reset" href="/">Logo</a>
                <div className=" d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/createUser'><a className="nav-link text-reset">Create user</a></Link>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/appointments'><a className="nav-link text-reset">See appointments</a></Link>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/listUsers'><a className="nav-link text-reset">List of users</a></Link>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/createAppointment'><a className="nav-link text-reset">Create appointment</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}