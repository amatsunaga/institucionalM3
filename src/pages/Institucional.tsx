import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";

import { MainLayout } from "../components/MainLayout/MainLayout";

// import styles from "./Institucional.module.scss";

const Institucional = () => {
  const institucionalRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          loader: () => redirect("/sobre")
        },
        {
          path: "sobre",
          element: <About />,
        },
      //   {
      //     path: "forma-de-pagamento",
      //     element: <Payment />,
      //   },
      //   {
      //     path: "entrega",
      //     element: <Shipping />,
      //   },
      //   {
      //     path: "troca-e-devolucao",
      //     element: <ExchangeAndReturn />,
      //   },
      //   {
      //     path: "seguranca-e-privacidade",
      //     element: <Security />,
      //   },
        {
          path: "contato",
          element: <Contact />,
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
