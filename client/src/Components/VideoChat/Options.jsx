import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import { SocketContext } from "./../../Context/SocketContectProvider";
import { Container, Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  container: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%"
    }
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
  }
}));
export function Options({ children }) {
  const { myState, callAccept, callEnd, name, setName, leaveCall, callUser } = React.useContext(SocketContext);
  const [idCall, setIdCall] = React.useState("");
  console.log(idCall);
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper elevation={12} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid className={classes.padding} item xs={12} md={6}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
              <CopyToClipboard text={myState} className={classes.margin}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Id
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid className={classes.padding} item xs={12} md={6}>
              <Typography gutterBottom variant="h6">
                Make Call
              </Typography>
              <TextField label="Id we need to Call" value={idCall} onChange={e => setIdCall(e.target.value)} />
              {callAccept && !callEnd ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  onClick={leaveCall}
                  className={classes.margin}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  onClick={() => callUser(idCall)}
                  className={classes.margin}
                  fullWidth
                >
                  Call Person
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
