import styles1 from "../../styles/search.module.css";
import { useState } from "react";
import Router from "next/router";

export default function Search({ users, handleDelete }) {
    const [listUsers, setListUsers] = useState(users);
  const [word, setWord] = useState([]);
  const handleInput = (event) => {
    let res = [];
    res.push(
      users.filter((user) =>
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    setWord(res[0]);
  };
  const handleDeleteFrom = (id) => {
    const newArr = listUsers.filter((user) => user._id != id);
    setWord(newArr);
  }
  return (
    <div className={styles1.total}>
      <section className={styles1.main}>
        <input
          type="text"
          placeholder="Buscar paciente..."
          className={styles1.input}
          onChange={handleInput}
        />
        {(word.length < 3) & (word.length > 0) ? (
          <div className={styles1.total}>
              <h2>Search results: </h2>
            <table className={`table table-striped ${styles1.table}`}>
              <thead>
                <tr>
                  <th scope="col">Passport / CI</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Email</th>
                  <th scope="col">Celular</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {(word.length < 3) & (word.length > 0)
                  ? word.map((user) => {
                      return (
                        <tr key={user._id}>
                          <td>{user.passportCI}</td>
                          <td>{user.name}</td>
                          <td>{user.surname}</td>
                          <td>{user.email}</td>
                          <td>{user.cellphone}</td>
                          <td>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={(e) =>
                                Router.push(
                                  "/listUsers/[userId]",
                                  `/listUsers/${user._id}`
                                )
                              }
                            >
                              Actualizar
                            </button>{" "}
                            <button
                              className="btn btn-success btn-sm"
                              onClick={(e) =>
                                Router.push(
                                  "/appointments/createAppointment/[userId]",
                                  `/appointments/createAppointment/${user._id}`
                                )
                              }
                            >
                              Crear cita
                            </button>{" "}
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={(e) => {
                                handleDelete(user._id);
                                handleDeleteFrom(user._id)
                              }}
                            >
                              Borrar
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>
    </div>
  );
}
