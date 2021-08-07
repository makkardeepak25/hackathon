import React, { createContext, useRef, useState, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
export const SocketContext = createContext();

const socket = io("http://localhost:5000");
export function SocketContectProvider({ children }) {
  const [streaming, setStreaming] = useState(null);
  const [myState, setMyState] = useState("");
  const [call, setCall] = useState({});
  const [callAccept, setCallAccept] = useState(false);
  const [callEnd, setCallEnd] = useState(false);
  const [name, setName] = useState("");

  const myVideoCall = useRef();
  const userVideoCall = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(curentStream => {
      setStreaming(curentStream);
      myVideoCall.current.srcObject = curentStream;
    });
    socket.on("me", id => {
      setMyState(id);
    });
    socket.on('calluser', ({ from, name: callerName, signal }) => {
        setCall({ isRecievedCall: true, from, name: callerName, signal });
      });
  }, []);

  const answerCall = () => {
    setCallAccept(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      streaming
    });
    peer.on("signal", data => {
      socket.emit("answercall", { signal: data, to: call.from });
    });
    peer.on("streaming", curentStream => {
      userVideoCall.current.srcObject = curentStream;
    });
    peer.signal(call.signal);
    connectionRef.current = peer;
  };
  const callUser = id => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      streaming
    });
    peer.on("signal", data => {
      socket.emit("calluser", { userToCall: id, signalData: data, from: myState, name });
    });
    peer.on("streaming", curentStream => {
      userVideoCall.current.srcObject = curentStream;
    });

    socket.on("callaccepted", signal => {
      setCallAccept(true);
      peer.signal(signal);
    });
    connectionRef.current = peer;
  };
  const leaveCall = () => {
    setCallEnd(true);
    connectionRef.current.destroy();

    window.location.reload();
  };
  const value = {
    callAccept,
    call,
    myVideoCall,
    userVideoCall,
    streaming,
    name,
    setName,
    callEnd,
    myState,
    callUser,
    leaveCall,
    answerCall
  };
  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
}
