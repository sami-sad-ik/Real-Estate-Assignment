import { createBrowserRouter } from "react-router-dom";
import Root from "../Main Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Main Layout/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/Estates.json"),
      },
    ],
  },
]);
export default routes;
