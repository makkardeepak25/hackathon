import React, {useRef,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField,Button} from '@material-ui/core';
const initState = {
    studentname:"",
    gaurdianname:"",
    applyingstandard:"",
    parentsincome:"",
    parentsemail:"",
    parentscontactnum:"",
    addressline1:"",
    addressline2:"",
    parentsqualification:"",
    password:""

}
//#FE6B8B
const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg,#60bf9c  30%,#c2e66a 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 1000,
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
      }
  });
function ParentsRegForm(){
    const classes = useStyles();
    const [parentsForm,setParentsForm] = useState(initState)
    const {studentname, gaurdianname, applyingstandard,parentsincome,parentsemail,parentscontactnum,addressline1,addressline2,parentsqualification,password } =  parentsForm
    const handleChange = (e) => {
        const {name,value} = e.target
        setParentsForm({...parentsForm,[name]:value})
        // console.log(name,value);
    }
    return(
        <div  className={classes.root}>
            <h2>Parents Registration Form</h2>
            <form  Validate autoComplete="off">

                <TextField  size = "medium" margin="dense" name="studentname" value = {studentname} onChange = {handleChange} label="Student Full Name" variant = "outlined" />
                <br />
                <br />
                <TextField margin="dense" name="guardianname" value = {gaurdianname} onChange = {handleChange} label="Guardian Full Name" variant="outlined" />
                <br />
                <br />
                <TextField margin="dense" name="applyingstandard" value = {applyingstandard} onChange = {handleChange} label="Aplying Standard" variant="outlined" />
                <br />
                <br />
                <TextField margin="dense"  name="parentsincome" value = {parentsincome} onChange = {handleChange} label="Parents Income" variant="outlined" />
                <br />
                <br />
                
                <TextField margin="dense" name="parentscontactnum" value = {parentscontactnum} onChange = {handleChange} label = "ParentsContactNumber" variant = "outlined"/>
                <br />
                <br />
                <TextField margin="dense" name = "address" value = {address} onChange = {handleChange} label = "address" variant = "outlined" />
                <br />
                <br />
                <TextField margin="dense" name= "parentsqualification" value = {parentsqualification} onChange = {handleChange} label = "Parents Qualification" variant = "outlined" />
                <br />
                <br />
                <TextField margin="dense" type="email" name="parentsemail" value = {parentsemail} onChange = {handleChange} label = "ParentsEmail" variant="outlined" />

                <br />
                <br />
                <TextField margin="dense" type="password" name="password" value = {password} onChange = {handleChange} label="Password" variant="outlined" />

                <br />
                <br />
                <Button variant="contained" className={classes.root2} color="primary">
                    S U B M I T
                </Button>


            </form>
        </div>
    )
}

export {ParentsRegForm}