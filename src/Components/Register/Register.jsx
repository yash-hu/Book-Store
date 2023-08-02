// import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextField, Typography ,InputLabel ,Select ,MenuItem, Button} from "@material-ui/core";

export const Register = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "password must be more then 8 character."),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password and Confirm Password must be same."
      )
      .required("Confirm Password is required."),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    roleId: Yup.number().required("Role is required"),
  });

  return (
    <>
      <Typography variant="h3">Login or Create an Account</Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          confirmPassword: "",
          roleId: 0,
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-block">
                <div className="personal-information">
                  <Typography variant="h4">Personal Information</Typography>
                  <p>
                    Please enter the following information to create your
                    account.
                  </p>
                  <div className="form-row-wrapper">
                    <div className="form-col">
                      <TextField
                        name="firstName"
                        label="First Name *"
                        variant="outlined"
                        onChange={handleChange}
                      />
                      <br />
                      {errors.firstName ? errors.firstName : ""}
                      <br />
                    </div>
                    <div className="form-col">
                      <TextField
                        name="lastName"
                        label="Last Name *"
                        variant="outlined"
                        onChange={handleChange}
                      />
                      <br />
                      {errors.lastName ? errors.lastName : ""}
                      <br />
                    </div>
                    <div className="form-col">
                      <TextField
                        name="email"
                        label="Email Address *"
                        variant="outlined"
                        onChange={handleChange}
                      />
                      <br />
                      {errors.email ? errors.email : ""}
                      <br />
                    </div>
                    <div className="form-col">
                      <InputLabel id="role">Roles</InputLabel>
                      <Select
                        labelId="role"
                        name="roleId"
                        style={{ width: "230px" }}
                      >
                        <MenuItem value="10">Ten</MenuItem>
                        <MenuItem value="20">Twenty</MenuItem>
                      </Select>
                      <br />
                      {errors.roleId ? errors.roleId : ""}
                      <br />
                    </div>
                  </div>
                </div>
                <div className="login-information">
                  <div className="form-col">
                    <TextField
                      type="password"
                      name="password"
                      label="Password *"
                      variant="outlined"
                      onChange={handleChange}
                    />
                    <br />
                    {errors.password ? errors.password : ""}
                    <br />
                  </div>
                  <div className="form-col">
                    <TextField
                      type="password"
                      name="confirmPassword"
                      label="Confirm Password *"
                      variant="outlined"
                      onChange={handleChange}
                    />
                    <br />
                    {errors.confirmPassword ? errors.confirmPassword : ""}
                    <br />
                  </div>
                </div>
                <div className="submit-button">
                    <Button type="submit" variant="contained" color="primary">Register</Button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
