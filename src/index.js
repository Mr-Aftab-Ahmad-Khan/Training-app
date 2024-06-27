import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <KindeProvider
  clientId="3cd48b2882e0459ba349ce0e2cbb3bb4"
  domain="https://bzsoftech.kinde.com"
  redirectUri="http://localhost:3000"
  logoutUri="http://localhost:3000"
>
    <Router>
      <App />
    </Router>
    </KindeProvider>
);
