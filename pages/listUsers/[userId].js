import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "../Components/CreateForm";

export default function updateUser() {
  const router = useRouter();
  const id = router.query;
  const [form, setValues] = useState({
    name: "",
    email: "",
    surname: "",
    passportCI: "",
    age: 0,
    civilState: "",
    citizenship: "",
    profession: "",
    cellphone: "",
    address: "",
    address2: "",
  });
  const [valueChanged, setValueChanged] = useState([]);
  useEffect(() => {
    axios({
      url: `https://prog-proyect.vercel.app/api/users/${id.userId}`,
      method: "GET",
    })
      .then((response) => setValues(response.data.data[0]))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSubmit = (event) => {
    axios({
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
    event.preventDefault();
  };
  const handleInput = (event) => {
    setValueChanged({
      ...valueChanged,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Update user</h1>
      <CreateForm
        form={form}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      ></CreateForm>
    </div>
  );
}

updateUser.getInitialProps = async (ctx) => {
  const userId = ctx.query;
  return { userId: userId };
};
