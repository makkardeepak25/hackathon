import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { SocketContectProvider } from "./Context/SocketContectProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SocketContectProvider> */}
        <App />
      {/* </SocketContectProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
