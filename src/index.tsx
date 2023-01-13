import React from "react";
import ReactDOM from "react-dom/client";

import Institucional from "./pages/Institucional";

import "./global.scss";
import { ModalProvider } from "./contexts/ModalContext";
import { WidthProvider } from "./contexts/WidthContext";

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
