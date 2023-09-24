import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Pages/Home";
import MainLayout from "../components/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
