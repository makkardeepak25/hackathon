import { AppBar, Typography } from "@material-ui/core";
import React from "react";
import { VideoPlayer } from "./VideoPlayer";
import { Options } from "./Options";
import { Notifications } from "./Notifications";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderRadius: 15,
    margin: "90px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%"
    }
  },
  image: {
    marginLeft: "15px"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  }
}));
export function VideoChat() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar position="static" color="secondary" className={classes.appBar}>
        <Typography variant="h2" align="center">
          Counselling Session{" "}
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}
