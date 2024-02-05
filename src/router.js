import { useRoutes } from "react-router-dom";
import Layout from "./layouts";
import Factory from "./pages/factory";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/factory",
          element: <Factory />,
        },
      ],
    },
  ]);
}
