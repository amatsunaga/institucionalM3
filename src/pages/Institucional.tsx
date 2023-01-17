import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { About } from "../components/MainLayout/About/About";
import { Contact } from "../components/MainLayout/Contact/Contact";
import { ExampleSection } from "../components/MainLayout/ExampleSection/ExampleSection";

import { MainLayout } from "../components/MainLayout/MainLayout";

const Institucional = () => {
  const institucionalRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          loader: () => redirect("institucionais/sobre"),
        },
        {
          path: "institucionais",
          children: [
            {
              path: "sobre",
              element: <About />,
            },
            {
              path: "forma-de-pagamento",
              element: <ExampleSection />,
            },
            {
              path: "entrega",
              element: <ExampleSection />,
            },
            {
              path: "troca-e-devolucao",
              element: <ExampleSection />,
            },
            {
              path: "seguranca-e-privacidade",
              element: <ExampleSection />,
            },
            {
              path: "contato",
              element: <Contact />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={institucionalRouter} />
    </>
  );
};

export default Institucional;
