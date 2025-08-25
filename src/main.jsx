import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'   // 👈 yahan apni css import karo

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/EduPanel-Student-Portal-UI/">
    <App />
  </BrowserRouter>
);
