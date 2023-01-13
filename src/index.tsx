import React from "react";
import ReactDOM from "react-dom/client";

import Institucional from "./pages/Institucional";

import "./global.scss";
import { ModalProvider } from "./contexts/ModalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <Institucional />
    </ModalProvider>
  </React.StrictMode>
);
