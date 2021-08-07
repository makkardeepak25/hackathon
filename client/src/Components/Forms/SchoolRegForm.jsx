import React, {useRef,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField,Button} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//"id":1,"school_name":"Andy","gst_number":"5602216203954139","email":"alupton0@irs.gov",
//"annual_fee":7,"address":"6 Village Green Trail","city":"Mislak","teacher_to_student_ratio":12,
//"school_image":"http://dummyimage.com/196x100.png/ff4444/ffffff","phone_number":8499419750
//#FE6B8B
const useStyles = makeStyles((theme) =>({
    root: {
      background: 'linear-gradient(45deg,#60bf9c  30%,#c2e66a 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 1400,
      padding: '0 50px',
      paddingTop:"30px"

    },
    root2: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
        margin:'auto'
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));
  const initState = {
    school_name:"",
    gst_number:"",
    email:"",
    annual_fee:"",
    maxstandard:"",
    
    address:"",
    city :"",
    teacher_to_student_ratio:"",
    board:"",
    school_image:"",
    phone_number:""
}
function SchoolRegForm(){
    const classes = useStyles();
    // const [board, setBoard] = React.useState('');
  const [open, setOpen] = React.useState(false);

    const [schoolregForm,setSchoolRegForm] = useState(initState)
    const {
        school_name,
        gst_number,
        email,
        annual_fee,
        maxstandard,
        address,
        city ,
        teacher_to_student_ratio,
        board,
        school_image,
        phone_number
 } =  schoolregForm
    const handleChange = (e) => {
        const {name,value} = e.target
        setSchoolRegForm({...schoolregForm,[name]:value})
        console.log(name,value);
    }
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
    
    return(
        <div  className={classes.root}>
            <h2>School Registration Form</h2>
            <form  noValidate autoComplete="off">

                <TextField  size = "medium" margin="dense" name="school_name" value = {school_name} onChange = {handleChange} label="School Name" variant = "outlined" />
                <br />
                <br />
                <TextField margin="dense" name="gst_number" value = {gst_number} onChange = {handleChange} label="GST Number" variant="outlined" />
                <br />
                <br />
                <TextField margin="dense" name="email" value = {email} onChange = {handleChange} label="email" variant="outlined" />
                    <br />
                    <br />
                    <TextField margin="dense" name="maxstandard" value = {maxstandard} onChange = {handleChange} label="maxstandard" variant="outlined" />
                <br />
                <br />

                <Button className={classes.button} onClick={handleOpen}>
                    Select the Board
                </Button>
                {/* <FormControl className={classes.formControl}> */}
                    {/* <InputLabel id="demo-controlled-open-select-label">Board</InputLabel> */}
                    <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    name="board"
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={board}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>STATE </MenuItem>
                    <MenuItem value={20}>CBSE</MenuItem>
                    <MenuItem value={30}>ICSE</MenuItem>
                    </Select>
                {/* </FormControl> */}
                <br />
                <br />

                <TextField margin="dense" name="annual_fee" value = {annual_fee} onChange = {handleChange} label="Annual Fee" variant="outlined" />
                <br />
                <br />
                
                <TextField margin="dense"  name="city" value = {city} onChange = {handleChange} label="City" variant="outlined" />
                <br />
                <br />
                <TextField margin="dense" name="teacher_to_student_ratio" value = {teacher_to_student_ratio} onChange = {handleChange} label="teacher_to_student_ratio" variant="outlined" />
                <br />
                <br />
                <TextField margin="dense" name="school_image" value = {school_image} onChange = {handleChange} label = "school_image" variant="outlined" />
                <br />
                <br />
                
                <TextField margin="dense" name = "address" value = {address} onChange = {handleChange} label = "Address" variant = "outlined" />
                <br />
                <br />
                <TextField margin="dense" name = "phone_number" value = {phone_number} onChange = {handleChange} label = "phone_number" variant = "outlined" />
                <br />
                <br />
                
                <Button variant="contained" className={classes.root2} color="primary">
                    S U B M I T
                </Button>


            </form>
        </div>
    )
}

export {SchoolRegForm}