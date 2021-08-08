import React,{useState} from 'react'
import { TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {  login } from './Redux/actions';
import { store } from './Redux/actions';
const useStyles = makeStyles((theme) =>({
    root: {
      background: 'linear-gradient(45deg,#60bf9c  30%,#c2e66a 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 500,
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

function ParentsLoginForm(){
    const classes = useStyles();
    const [login, setLogin] = useState([])
    const handleChange = (e) => {
        const {name, value} = e.target
        // setLogin({...login,[name]:value})
    }
    const initState = useSelector((state) => state)
    console.log(initState);
    const dispatch = useDispatch();
    const handleSubmit = () =>{
        const login = login()
    }
    return(
        <div>
            Parents Login
            <TextField margin="dense" type = "email" name="email" value = {initState.email} onChange = {handleChange} label="email" variant="outlined" />
                    <br />
                    <br />
                    <TextField margin="dense" type = "password" name="password" value = {initState.password} onChange = {handleChange} label="password" variant="outlined" />
                    <br />
                    <br />
                 
                <Button onClick = {handleSubmit} variant="contained" className={classes.root2} color="primary">
                    S U B M I T
                </Button>

        </div>
    )
}
export {ParentsLoginForm}