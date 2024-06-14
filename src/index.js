import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter as Router } from "react-router-dom";

// import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-gtat6gks0jeme5l8.us.auth0.com"
    clientId="JcEYsia4hzuEpNriByzGJfepX5xJ10bU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
 <Router>
    <App />
    </Router>
     </Auth0Provider>
  // {/* // </React.StrictMode> */}
);
