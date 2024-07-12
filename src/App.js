import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyles from "./GlobalStyles";

import routes from "./routes/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
