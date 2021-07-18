import Navbar from "./Components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import PerInv from "./Components/PerInv";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Similar a appointments, esta pagina solo es una plantilla para poder agregar mas funcionalidad a futuro
// con un apartado que almacene todas las facturas generadas (esto es extra y va mas alla de los objetivos)
export default function appointments() {
    const [app, setApp] = useState([]);
    useEffect(() => {
        axios
            .get("https://prog-proyect.vercel.app/api/appointments")
            .then((response) => {
                setApp(response.data.data);
            })
            .catch((error) => {
                return error;
            });
    }, []);
    const handleDelete = (id) => {
        const newArr = app.filter((user) => user._id != id);
        setApp(newArr);
        axios
            .delete(`https://prog-proyect.vercel.app/api/appointments/${id}`)
            .then((response) => {
                console.log(response);
            });
    };
    return (
        <div>
            <Navbar></Navbar>
            <Head>
                <title>Facturas</title>
                <link rel="icon" href="/logo.png" />
            </Head>


            <div className="mb-4">
                <h1 className={styles.title}>Lista de<font color='blue'> Facturas</font></h1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="text-center"> {/* Arreglar columna */}
                            Número de factura
                        </th>
                        <th scope="col" className="text-center"> {/* Arreglar columna */}
                            Total
                        </th>
                        <th scope="col" className="text-center">
                            Nombre
                        </th>
                        <th scope="col" className="text-center">
                            Apellido
                        </th>

                        <th scope="col" className="text-center">
                            Email
                        </th>
                        <th scope="col" className="text-center">
                            Celular
                        </th>
                        <th scope="col" className="text-center">
                            Fecha de emisión
                        </th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {app.map((invoice) => {
                        if (invoice.payment) {
                            return (
                                <PerInv invoice={invoice} handleDelete={handleDelete} color="success" key={invoice._id}></PerInv>
                            );
                        } else {
                            return (
                                <PerInv invoice={invoice} handleDelete={handleDelete} color="danger" key={invoice._id}></PerInv>
                            );
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}
