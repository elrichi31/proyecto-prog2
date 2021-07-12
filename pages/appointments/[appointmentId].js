import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import AppForm from "../Components/AppForm";
import { useRouter } from "next/router";

export default function updateAppointment() {
  const router = useRouter();
  const id = router.query;
  const [valueChanged, setValueChanged] = useState([]);
  const [fecha, cambiarFecha] = useState(new Date());
  const [form, setValues] = useState({
    name: "",
    surname: "",
    cellphone: "",
    email: "",
    reason: "",
  });
  const handleInput = (event) => {
    setValueChanged({
      ...valueChanged,
      [event.target.name]: event.target.value,
    });
  };
  const handleClick = (event) => {
    setValueChanged({
      ...valueChanged,
      appointmentDate: fecha,
    });
  };
  const handleSubmit = (event) => {
    axios.put(`https://prog-proyect.vercel.app/api/appointments/${id.appointmentId}`,valueChanged)
        .then(response => {
          console.log(response)
          window.location.replace("/appointments")
        })
        .catch((error) => {
            console.log(error)
        })
    event.preventDefault();
  };
  useEffect(() => {
    axios
      .get(`https://prog-proyect.vercel.app/api/appointments/${id.appointmentId}`)
      .then((app) => {
        setValues(app.data.data[0]);
        cambiarFecha(app.data.data[0].appointmentDate);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <h1>Update Appointment</h1>
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

updateAppointment.getInitialProps = async (ctx) => {
  const appointmentId = ctx.query;
  return { appointmentId: appointmentId };
};
