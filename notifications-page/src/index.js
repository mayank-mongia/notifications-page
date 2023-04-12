import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./index.css";

const domEle = document.getElementById("root");
const root = ReactDOM.createRoot(domEle);

root.render(<App />);