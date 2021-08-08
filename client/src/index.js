import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SocketContectProvider } from "./Context/SocketContectProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>
    <BrowserRouter>
      <SocketContectProvider>
        <App />
      </SocketContectProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
