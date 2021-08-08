import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "./../../Context/SocketContectProvider";
import { Grid, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles({
  video: {
    width: "400px",
  },
  gridContainer: {
    justifyContent: "center",
  },
  paper: {
    padding: "10px",
    border: "2px solid red",
    margin: "10px"
  }
});
export function VideoPlayer() {
    const { name, callAccept, myCall, userCall, callEnd, stream, call } = React.useContext(SocketContext);
    const classes = useStyles();
    return (
      <Grid container className={classes.gridContainer}>
        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
              <video playsInline muted ref={myCall} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
        {callAccept && !callEnd && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={userCall} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
      </Grid>
    );
}
