import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import './index.css';
import Navbar from './componentes/Navbar';
import Inicio from './rutas/Inicio';
import Ejercicios from './rutas/Ejercicios';
import Nutricion from './rutas/Nutricion';
import Morse from './rutas/Morse';
import ErrorPage from './rutas/ErrorPage';
import ExerciseDetail from "./fitness/ExerciseDetail";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "ejercicios",
        element: <Ejercicios />,
      },
      {
        path: "ejercicios/:id",
        element: <ExerciseDetail />,
      },
      {
        path: "nutricion",
        element: <Nutricion />,
      },
      {
        path: "morse",
        element: <Morse />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
