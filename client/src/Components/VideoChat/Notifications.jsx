import React from "react";
import { Button } from "@material-ui/core";

import { SocketContext } from "./../../Context/SocketContectProvider";

export function Notifications() {
    const { answerCall, call, callAccept } = React.useContext(SocketContext);

    return (
      <>
        {call.isReceivingCall && !callAccept && (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h1>{call.name} is calling:</h1>
            <Button variant="contained" color="primary" onClick={answerCall}>
              Answer
            </Button>
          </div>
        )}
      </>
    );
}
