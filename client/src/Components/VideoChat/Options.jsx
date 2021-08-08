import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import { SocketContext } from "./../../Context/SocketContectProvider";
import { Container, Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  gridContainer: {
    width: "100%",

  },
  container: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
 
  },
  margin: {
    marginTop: 20
  },
  padding: {
    padding: 20
  },
  paper: {
    padding: "10px 20px",
    border: "2px solid black"
  },
 
});
export function Options({ children }) {
    const { myData, callAccept, name, setName, callEnd, leaveCall, callUser } = React.useContext(SocketContext);
    const [idToCall, setIdToCall] = React.useState('');
    const classes = useStyles();
  
    return (
      <Container className={classes.container}>
        <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Counsellor Info</Typography>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                <CopyToClipboard text={myData} className={classes.margin}>
                  <Button variant="contained" color="primary" className={classes.btn} fullWidth startIcon={<Assignment fontSize="large" />}>
                    Copy Your ID
                  </Button>
                </CopyToClipboard>
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Make a call</Typography>
                <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                {callAccept && !callEnd ? (
                  <Button variant="contained" color="secondary" className={classes.btn} startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                    Hang Up
                  </Button>
                ) : (
                  <Button variant="contained" color="secondary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                    Call
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
          {children}
        </Paper>
      </Container>
    );
}
