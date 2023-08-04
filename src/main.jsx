import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "./index.css";
import router from "./Routers/Router";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);