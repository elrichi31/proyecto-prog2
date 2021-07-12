import Navbar from "../../Components/Navbar";
import { useRouter } from "next/router";
import AppForm from "../../Components/AppForm";
import { useState } from "react";

export default function createNewApp(){
    const router = useRouter();
    const id = router.query;
    console.log(id)
    const [form, setValues] = useState({
        name: "",
        surname: "",
        cellphone: "",
        email: "",
        reason: "",
      });
    return(
        <div>
            <Navbar></Navbar>
            <h1>Create appointment</h1>
            <AppForm form={form}></AppForm>
        </div>
    )
}

createNewApp.getInitialProps = async (ctx) => {
    const userId = ctx.query;
    return { userId: userId };
  };
  