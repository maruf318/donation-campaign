import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Pages/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import Donation from "../components/Pages/Donation";
import Statistics from "../components/Pages/Statistics";
import ErrorPage from "../components/Pages/ErrorPage";
import CardDetails from "../components/Pages/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/card/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default router;
