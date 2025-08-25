import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import './index.css'   // 👈 yahan apni css import karo

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter basename="/EduPanel-Student-Portal-UI/">
    <App />
  </HashRouter>
);
