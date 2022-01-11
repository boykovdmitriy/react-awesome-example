import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

const providerConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
  audience: process.env.REACT_APP_AUTH0_AUDIENCE || "",
};

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Auth0Provider {...providerConfig} redirectUri={window.location.origin}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>not found</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
