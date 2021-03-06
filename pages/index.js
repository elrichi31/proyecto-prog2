import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Components/Navbar'

// Landing page, incluye una descripcion de todo lo que se puede hacer en la aplicacion

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Head>
        {/* Pestaña */}
        <title>DentaList</title>
        <meta name="description" content="Generated by create next app p" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <div className="">
        
        {/* Titulo y descripcion */}
          <h1 className={styles.title}>
            Bienvenido a Denta<font color='blue'>List</font>
          </h1>

          <p className={styles.description}>
            Sistema de gestión clínica dental
          </p>
        </div>

{/* Tarjetas con explicacion y referencias a cada apartado de la aplicacion */}
        <div className={styles.grid}>
          <a href='/createUser' className={styles.card}>
            <h2>Crear usuario &rarr;</h2>
            <p>Añade un paciente nuevo a la base de datos. Se incluyen datos personales y su historial clínico.</p>
          </a>

          <a href="/listUsers" className={styles.card}>
            <h2>Pacientes &rarr;</h2>
            <p>Revisa los datos personales e historial clínico de pacientes registrados.</p>
          </a>

          <a href="/createAppointment" className={styles.card} >
            <h2>Agendar cita &rarr;</h2>
            <p>Agenda una cita para un paciente nuevo o uno registrado. También envia recordatorio un dia antes de la cita.</p>
          </a>

          <a
            href="/appointments"
            className={styles.card}
          >
            <h2>Citas &rarr;</h2>
            <p>
              Revisa o actualiza citas pasadas y pendientes. Registra pacientes con citas pero sin historial clínico. Genera facturas y lleva un registro del pago.
            </p>
          </a>

          {/* <a href="/createInvoice" className={styles.card} >
            <h2>Facturar &rarr;</h2>
            <p>Crea y edita la información de facturación de una cita o artículo.</p>
          </a> */}

{/* Extra para agregar en el futuro */}

          {/* <a href="/invoice" className={styles.card} >
            <h2>Facturas &rarr;</h2>
            <p>Revisa el registro de facturas creadas anteriormente.</p>
          </a> */}
        </div>
      </main>

{/* Footer */}
      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Proyecto de programación 2
        </a>
      </footer>
    </div>
  )
}
