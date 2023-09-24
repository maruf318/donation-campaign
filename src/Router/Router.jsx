import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Pages/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import Donation from "../components/Pages/Donation";
import Statistics from "../components/Pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default router;
