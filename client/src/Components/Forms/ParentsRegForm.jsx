import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import axios from "axios";
const initState = {
  student_name: "",
  guardian_name: "",
  applying_standard: "",
  parents_income: "",
  password: "",
  email: "",
  parent_contact: "",
  address: "",
  city: "",
  parents_profession: ""
};
//#FE6B8B
const useStyles = makeStyles({
  root: {
    background: "pink",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "91vh",
    padding: "3px 50px 0px 50px",
    marginTop: "60px"
  },
  subroot:{
    width: "60%",
    height: "73%",
    background: "	#FFB6C1",
    margin: "auto",
    padding: "15px",
    marginTop: "6%",
  },
  root2: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});
function ParentsRegForm() {
  const classes = useStyles();
  const [parentsForm, setParentsForm] = useState(initState);
  const {
    student_name,
    guardian_name,
    applying_standard,
    parents_income,
    password,
    email,
    parent_contact,
    address,
    city,
    parents_profession
  } = parentsForm;
  const handleChange = e => {
    const { name, value } = e.target;
    setParentsForm({ ...parentsForm, [name]: value });
    // console.log(name,value);
  };
  const handleSubmit = () => {
    var payload = {
      student_name,
      guardian_name,
      applying_standard: Number(applying_standard),
      parents_income:Number(parents_income),
      password,
      email,
      parent_contact:Number(parent_contact),
      address,
      city,
      parents_profession
      };
      axios
      .post("http://localhost:8000/parent/register", payload)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className={classes.root}>
      <div className={classes.subroot}>
      <h2>Parents Registration Form</h2>
      <form noValidate autoComplete="off">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          <div>
            <TextField
              size="medium"
              margin="dense"
              name="student_name"
              value={student_name}
              onChange={handleChange}
              label="Student Full Name"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              margin="dense"
              name="guardian_name"
              value={guardian_name}
              onChange={handleChange}
              label="Guardian Full Name"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              margin="dense"
              name="applying_standard"
              value={applying_standard}
              onChange={handleChange}
              label="Aplying Standard"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              margin="dense"
              name="parents_income"
              value={parents_income}
              onChange={handleChange}
              label="Parents Income"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              margin="dense"
              name="email"
              value={email}
              onChange={handleChange}
              label="Enter Email"
              variant="outlined"
            />
            <br />
            <br />
          </div>
          <div>
            <TextField
              margin="dense"
              name="password"
              value={password}
              onChange={handleChange}
              label="Enter Password"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              margin="dense"
              name="parent_contact"
              value={parent_contact}
              onChange={handleChange}
              label="Contact Number"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              margin="dense"
              name="address"
              value={address}
              onChange={handleChange}
              label="Address Line 1"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              margin="dense"
              name="city"
              value={city}
              onChange={handleChange}
              label="Enter City Name"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              margin="dense"
              name="parents_profession"
              value={parents_profession}
              onChange={handleChange}
              label="Enter your Profession"
              variant="outlined"
            />
            <br />
            <br />
          </div>
        </div>
        <Button onClick={handleSubmit} variant="contained" className={classes.root2} color="primary">
          S U B M I T
        </Button>
      </form>
    </div>
    </div>
  );
}

export { ParentsRegForm };
