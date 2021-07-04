import Navbar from "./Components/Navbar";
export default function listUsers() {
    const arr = [10, 3, 5 ,6]
  return (
    <div>
      <Navbar></Navbar>
      <h1>List of users</h1>
      <table className="table table-striped">
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
            {
                arr.map(id => {
                    return (
                        <tr key={id}>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>nick1201@gmail.com</td>
                            <td>0996584479</td>
                            <td>
                              <button className="btn btn-primary btn-block">Actualizar</button> <button className="btn btn-success">Crear cita</button> <button className="btn btn-danger">Borrar</button>
                            </td>
                        </tr>

                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
}
