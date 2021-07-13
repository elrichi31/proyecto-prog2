import Navbar from "../../Components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "../../Components/CreateForm";

export default function createUser() {
  const router = useRouter();
  const id = router.query;
  const [form, setValues] = useState({
    name: "",
    email: "",
    surname: "",
    passportCI: "",
    age: "",
    civilState: "",
    citizenship: "",
    profession: "",
    cellphone: "",
    address: "",
    address2: "",
  });
  useEffect(async () => {
    await axios
      .get(
        `https://prog-proyect.vercel.app/api/appointments/${id.appointmentId}`
      )
      .then((response) => {
        setValues({
          name: response.data.data[0].name,
          email: response.data.data[0].email,
          surname: response.data.data[0].surname,
          passportCI: "",
          age: "",
          civilState: "",
          citizenship: "",
          profession: "",
          cellphone: response.data.data[0].cellphone,
          address: "",
          address2: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("https://prog-proyect.vercel.app/api/users", form)
      .then((response) => {
        window.location.replace("/listUsers");
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Create user</h1>
      <CreateForm
        form={form}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      ></CreateForm>
    </div>
  );
}

createUser.getInitialProps = async (ctx) => {
  const appointmentId = ctx.query;
  return { appointmentId: appointmentId };
};
