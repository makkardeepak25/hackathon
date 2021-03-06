import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

//"id":1,"school_name":"Andy","gst_number":"5602216203954139","email":"alupton0@irs.gov",
//"annual_fee":7,"address":"6 Village Green Trail","city":"Mislak","teacher_to_student_ratio":12,
//"school_image":"http://dummyimage.com/196x100.png/ff4444/ffffff","phone_number":8499419750
//#FE6B8B
const useStyles = makeStyles(theme => ({
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
    height: "87%",
    background: "	#FFB6C1",
    margin: "auto",
    padding: "15px",
    marginTop: "3%",
  },
  images:{
    border: "1px solid grey",
    padding: "5px",
    width: "50%",
    fontSize: "15px",
    
  },
  root2: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px ",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    margin: "auto"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));
const initState = {
  school_name: "",
  gst_number: "",
  email: "",
  password: "",
  annual_fee: "",
  max_standard: "",
  address: "",
  city: "",
  teacher_to_student_ratio: "",
  board: "",
  school_image: "",
  phone_number: ""
};
function SchoolRegForm() {
  const classes = useStyles();
  const [imageUrl, setImageUrl]=useState("")
  // const [board, setBoard] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const imageRef = React.useRef();

  const [schoolregForm, setSchoolRegForm] = useState(initState);
  const {
    school_name,
    gst_number,
    email,
    password,
    annual_fee,
    max_standard,
    address,
    city,
    teacher_student_ratio,
    board,
    school_images,
    phone_number
  } = schoolregForm;
  const handleChange = e => {
    const { name, value } = e.target;
    setSchoolRegForm({ ...schoolregForm, [name]: value });
    console.log(name, value);
  };

  const handleClose = () => {
    setOpen(false);
  };

   const ShowUrlImage= async()=>{
     console.log(imageRef.current.files[0])
    await axios({
      method: "post",
      url: "https://api.imgur.com/3/image",
      headers: {
        Authorization: `Client-ID ff80a62bfa31507`,
      },
      data:imageRef.current.files[0] 
    })
      .then((res) => {
          console.log(res.data.data.link)
        setImageUrl(res.data.data.link)
        alert('Save Your Changes')
        // console.log(res.data.data.link)
    })
      .catch((err) =>{
          
           alert("You are Redirecting to http://127.0.0.2:3000/")
          //  window.open('http://127.0.0.2:3000/user/setting')
         
        });
  };

  

  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    var payload = {
      school_name,
      gst_number,
      email,
      password,
      annual_fee: Number(annual_fee),
      max_standard,
      address,
      city,
      teacher_student_ratio: Number(teacher_student_ratio),
      board,
      school_images:imageUrl,
      phone_number: Number(phone_number)
    };
    console.log(payload);
    axios
      .post("http://localhost:8000/school/register", payload)
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
      <h2>School Registration Form</h2>
      <div noValidate autoComplete="off">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          <div>
            <TextField
              type="text"
              size="medium"
              margin="dense"
              name="school_name"
              value={school_name}
              onChange={handleChange}
              label="School Name"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              type="text"
              margin="dense"
              name="gst_number"
              value={gst_number}
              onChange={handleChange}
              label="GST Number"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              type="text"
              margin="dense"
              name="email"
              value={email}
              onChange={handleChange}
              label="Enter Email"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              margin="dense"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              label="Enter Password"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              type="text"
              margin="dense"
              name="max_standard"
              value={max_standard}
              onChange={handleChange}
              label="Max. Standard"
              variant="outlined"
            />
            <br />
            <br />

            <Button className={classes.button} onClick={handleOpen}>
              Select the Board
            </Button>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              name="board"
              type="text"
              onClose={handleClose}
              onOpen={handleOpen}
              value={board}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"state"}>STATE </MenuItem>
              <MenuItem value={"cbse"}>CBSE</MenuItem>
              <MenuItem value={"icse"}>ICSE</MenuItem>
            </Select>
            <br />
            <br />
          </div>
          <div>
            <TextField
              type="number"
              margin="dense"
              name="annual_fee"
              value={annual_fee}
              onChange={handleChange}
              label="Annual Fee"
              variant="outlined"
            />
            <br />
            <br />

            <TextField
              type="text"
              margin="dense"
              name="city"
              value={city}
              onChange={handleChange}
              label="City"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              type="number"
              margin="dense"
              name="teacher_student_ratio"
              value={teacher_student_ratio}
              onChange={handleChange}
              label="teacher_to_student_ratio"
              variant="outlined"
            />
            <br />
            <br />
            <input className={classes.images}
              margin="dense"
              name="school_images"
              onChange={ShowUrlImage}
              // label="school_image"
              ref={imageRef}
              variant="outlined"
              type="file"
            />
            <br />
            <br />

            <TextField
              type="text"
              margin="dense"
              name="address"
              value={address}
              onChange={handleChange}
              label="Address"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              type="number"
              margin="dense"
              name="phone_number"
              value={phone_number}
              onChange={handleChange}
              label="phone_number"
              variant="outlined"
            />
            <br />
            <br />
          </div>
        </div>
        <Button onClick={handleSubmit} variant="contained" className={classes.root2} color="primary">
          S U B M I T
        </Button>
      </div>
      </div>
    </div>
  );
}

export { SchoolRegForm };
