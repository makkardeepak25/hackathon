import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "./../../Context/SocketContectProvider";
import { Grid, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  video: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px"
    }
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px"
  }
}));
export function VideoPlayer() {
  const { name, callAccept, myVideoCall, userVideoCall, callEnd, streaming, call } = React.useContext(SocketContext);
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      {streaming && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video playsInline muted ref={myVideoCall} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccept && !callEnd && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video playsInline ref={userVideoCall} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
}
