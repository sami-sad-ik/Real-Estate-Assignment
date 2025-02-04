import { createBrowserRouter } from "react-router-dom";
import Root from "../Main Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Main Layout/ErrorPage";
import PropertyDetails from "../Components/PropertyDetails";

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
      {
        path: "/property/:id",
        element: <PropertyDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/Estates.json");
          const properties = await res.json();
          const property = properties.find(
            (prop) => String(prop.id) === params.id
          );
          return property;
        },
      },
    ],
  },
]);
export default routes;
