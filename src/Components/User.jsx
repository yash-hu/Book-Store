// import { NavLink } from "react-router-dom";
// import { Button } from "@material-ui/core";
// import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

export const User = ({ name, age }) => {
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");
  // const [details, setDetails] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e, property) => {
  //   setDetails({
  //     ...details,
  //     [property]: e.target.value,
  //   });
  // };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "password must be more then 8 character."),
  });

  // useEffect(() => {
  //     console.log('Email is updated')
  //     window.addEventListener('click',() => {});
  //     return window.removeEventListener('click' , () => {});
  // } ,[details.email , details.password])  //(function , dependency array)
  //if we don't give dependency array then it will execute on any variable change

  return (
    <>
      {/* <h1>Username : {name}</h1>
        <h1>Age : {age}</h1>
        <NavLink to={"/"} >Home </NavLink> |
        <NavLink to={"/profile"} > Profile</NavLink>
        <br />
        x= {x}
        <br />
        <Button variant="contained" color="primary" onClick={()=>setX(x+1)}>Increment x</Button>
        <Button variant="contained" color="secondary" onClick={()=>setX(x-1)}>Decrement x</Button>
        <br /> */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input name="email" onChange={handleChange} />
              <br />
              {errors.email ? errors.email : ""}
              <input name="password" type="password" onChange={handleChange} />
              <br />
              {errors.password ? errors.password : ""}
              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
