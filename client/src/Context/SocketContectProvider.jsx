import React, { createContext, useRef, useState, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
export const SocketContext = createContext();

const socket = io("http://localhost:5000");
export function SocketContectProvider({ children }) {
    const [callAccept, setCallAccept] = useState(false);
    const [callEnd, setCallEnd] = useState(false);
    const [stream, setStream] = useState();
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [myData, setMyData] = useState('');
  
    const myCall = useRef();
    const userCall = useRef();
    const connectionRef = useRef();
  
    useEffect(() => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
          setStream(currentStream);
  
          myCall.current.srcObject = currentStream;
        });
  
      socket.on('me', (id) => setMyData(id));
  
      socket.on('calluser', ({ from, name: callerName, signal }) => {
        setCall({ isReceivingCall: true, from, name: callerName, signal });
      });
    }, []);
  
    const answerCall = () => {
      setCallAccept(true);
  
      const peer = new Peer({ initiator: false, trickle: false, stream });
  
      peer.on('signal', (data) => {
        socket.emit('answercall', { signal: data, to: call.from });
      });
  
      peer.on('stream', (currentStream) => {
        userCall.current.srcObject = currentStream;
      });
  
      peer.signal(call.signal);
  
      connectionRef.current = peer;
    };
  
    const callUser = (id) => {
      const peer = new Peer({ initiator: true, trickle: false, stream });
  
      peer.on('signal', (data) => {
        socket.emit('calluser', { userToCall: id, signalData: data, from: myData, name });
      });
  
      peer.on('stream', (currentStream) => {
        userCall.current.srcObject = currentStream;
      });
  
      socket.on('callaccepted', (signal) => {
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
  
    return (
      <SocketContext.Provider value={{
        call,
        callAccept,
        myCall,
        userCall,
        stream,
        name,
        setName,
        callEnd,
        myData,
        callUser,
        leaveCall,
        answerCall,
      }}
      >
        {children}
      </SocketContext.Provider>
    );
}
