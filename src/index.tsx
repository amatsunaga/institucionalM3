import React from "react";
import ReactDOM from "react-dom/client";

import { WidthProvider } from "./contexts/WidthContext";
import { ModalProvider } from "./contexts/ModalContext";
import Institucional from "./pages/Institucional";

import "./global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WidthProvider>
      <ModalProvider>
        <Institucional />
      </ModalProvider>
    </WidthProvider>
  </React.StrictMode>
);
