import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const redirectUri = process.env.REACT_APP_AUTH_CALLBACK_URL || 'https://bzsoftech.com';
const logoutUri = process.env.REACT_APP_AUTH_LOGOUT_URL || 'https://bzsoftech.com';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <KindeProvider
    clientId="3cd48b2882e0459ba349ce0e2cbb3bb4"
    domain="https://bzsoftech.kinde.com"
    redirectUri={redirectUri}
    logoutUri={logoutUri}
  >
    <Router>
      <App />
    </Router>
  </KindeProvider>
);
