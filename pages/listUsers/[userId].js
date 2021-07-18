import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "../Components/CreateForm";
import { FormHelperText } from "@material-ui/core";

export default function updateUser() {
  const router = useRouter();
  const id = router.query;
  const [fechaRegistro, cambiarFechaRegistro] = useState(new Date());
  const [fechaNacimiento, cambiarFechaNacimiento] = useState(new Date());
  function getEdad(dateString) {
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())){
      edad--
    }
    return edad
  }
  const [formCheck, setFormCheck] = useState({q0: false});
  const [form, setValues] = useState({
    history: {q0: false},
  });
  const [valueChanged, setValueChanged] = useState([]);
  useEffect(async () => {
    await axios({
      url: `https://prog-proyect.vercel.app/api/users/${id.userId}`,
      method: "GET",
    })
      .then((response) => {
        setValues(response.data.data[0])
        cambiarFechaNacimiento(response.data.data[0].birthDate)
        cambiarFechaRegistro(response.data.data[0].registryDate)
        // console.log(response.data.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(valueChanged)
    await axios({
      url: `https://prog-proyect.vercel.app/api/users/${id.userId}`,
      method: 'PUT',
      data: valueChanged
    })
      .then((response) => {
        console.log(response);
        window.location.replace("/listUsers")
      })
      .catch((error) => {
        console.log(error);
      });
    
  };
  const handleInput = (event) => {
    setValueChanged({
      ...valueChanged,
      history: {
        ...form.history,
        ...formCheck
      },
      [event.target.name]: event.target.value,
    });
  };
  const handleBlur = (event) => {
    setValues({
      ...form,
      age: getEdad(fechaNacimiento),
      birthDate: fechaNacimiento,
    })
    setValueChanged ({
      ...valueChanged,
      age: getEdad(fechaNacimiento),
      birthDate: fechaNacimiento,
    })
  }
  const handleChange = (event) => {
    setFormCheck({
      ...form.history,
      ...formCheck,
      [event.target.name]: event.target.checked,
    });
    setValueChanged({
      ...valueChanged,
      history: {
        ...form.history,
        ...formCheck,
        [event.target.name]: event.target.checked,
      },
    });
  };
  const handleClick = (event) => {
    // setValues({
    //   ...form,
    //   history: {
    //     ...formCheck,
    //   },
    // });
    setValueChanged({
      ...valueChanged,
      history: {
        ...formCheck
      },
      //[event.target.name]: event.target.value,
    });
  };
  const handleClickBt = (event) => {
    setFormCheck({
      ...form.history,
      ...formCheck,
      [event.target.name]: event.target.checked
    })
    setValueChanged({
      ...valueChanged,
      history: {
        ...form.history,
        ...formCheck,
        [event.target.name]: event.target.checked
      },
      //[event.target.name]: event.target.value,
    });
  }
  return (
    <div>
      <Navbar></Navbar>
      <h1>Update user</h1>
      <CreateForm
        form={form}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        handleChange={handleChange}
        handleClick={handleClick}
        fechaRegistro={fechaRegistro}
        cambiarFechaRegistro={cambiarFechaRegistro}
        fechaNacimiento={fechaNacimiento}
        cambiarFechaNacimiento={cambiarFechaNacimiento}
        handleBlur={handleBlur}
        handleClickBt={handleClickBt}
        disabled={true}
      ></CreateForm>
    </div>
  );
}

updateUser.getInitialProps = async (ctx) => {
  const userId = ctx.query;
  return { userId: userId };
};
