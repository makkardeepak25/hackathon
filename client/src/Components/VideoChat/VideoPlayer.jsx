import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "./../../Context/SocketContectProvider";
import { Grid, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  video: {
    width: "400px",
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
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = React.useContext(SocketContext);
    const classes = useStyles();
    return (
      <Grid container className={classes.gridContainer}>
        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
              <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
        {callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={userVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
      </Grid>
    );
}
