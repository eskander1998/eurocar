import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import Description from "../components/templates/Description";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

export default routes;
