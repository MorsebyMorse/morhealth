import React, {useEffect} from "react";
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
import Cuisine from "./nutricion/Cuisine";
import Recipe from "./nutricion/Recipe";
import Morse from './rutas/Morse';
import ErrorPage from './rutas/ErrorPage';
import ExerciseDetail from "./fitness/ExerciseDetail";
import Searched from "./nutricion/Searched";
import Footer from "./componentes/Footer";
import Salud from "./rutas/Salud";
import ScrollToTop from "./componentes/scrollToTop";

const AppLayout = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "es",
        autoDisplay: true
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <div id="google_translate_element" className="translate"></div>
      <Outlet />
      <Footer/>
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
        path: "nutricion/searched/:search",
        element: <Searched />,
      },
      {
        path: "nutricion/cuisine/:type",
        element: <Cuisine />,
      },
      {
        path: "nutricion/recipe/:name",
        element: <Recipe />,
      },
      {
        path: "morse",
        element: <Morse />,
      },
      {
        path: "salud",
        element: <Salud />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
