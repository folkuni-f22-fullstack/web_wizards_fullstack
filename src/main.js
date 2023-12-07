import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routeconfig.jsx";
import { RecoilRoot } from "recoil";
// import Floater from "../src/Components/Floater.jsx"
import "./index.css";
// const handleFabClick = () => {
// 	console.log("FAB Clicked!")
// }
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(RecoilRoot, { children: _jsx(RouterProvider, { router: router }) }) }));
