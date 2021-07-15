import Navbar from "../../Components/Navbar";
import { useRouter } from "next/router";
import AppForm from "../../Components/AppForm";
import { useState, useEffect } from "react";
import axios from "axios";

export default function createNewApp() {
  const router = useRouter();
  const id = router.query;
  const [valueChanged, setValueChanged] = useState([]);
  const [fecha, cambiarFecha] = useState(new Date());
  const [form, setValues] = useState({
    name: "",
    surname: "",
    cellphone: "",
    email: "",
    tratamiento: "",
    reason: "",
    userId: id.userId,
    payment: false
  });
  useEffect(() => {
    axios
      .get(`https://prog-proyect.vercel.app/api/users/${id.userId}`)
      .then((response) => setValues({
          name: response.data.data[0].name,
          surname: response.data.data[0].surname,
          cellphone: response.data.data[0].cellphone,
          email: response.data.data[0].email,
      }))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleInput = (event) => {
    setValueChanged({
      ...valueChanged,
      [event.target.name]: event.target.value,
    });
  };
  const handleClick = (event) => {
    setValueChanged({
      ...form,
      ...valueChanged,
      appointmentDate: fecha,
    });
  };
  const handleSubmit = (event) => {
    console.log(valueChanged);
    event.preventDefault()
    axios.post(`https://prog-proyect.vercel.app/api/appointments`, valueChanged)
    .then((response) => {
        setTimeout(() =>{
            console.log(response)
        }, 2000)
        window.location.replace("/appointments")
    }).catch((error) => {console.log(error)})
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Create appointment</h1>
      <AppForm
        form={form}
        fechaSeleccionada={fecha}
        cambiarFecha={cambiarFecha}
        handleInput={handleInput}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
      ></AppForm>
    </div>
  );
}

createNewApp.getInitialProps = async (ctx) => {
  const userId = ctx.query;
  return { userId: userId };
};
