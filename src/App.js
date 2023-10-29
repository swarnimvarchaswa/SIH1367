import React from "react";
import State from "./components/state";
import Form from "./components/form";
import Personal from "./components/personal";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <State />
        </div>
      ),
    },
    {
      path: "/details",
      element: (
        <div>
          <Form />
        </div>
      ),
    },
    {
      path: "/personal",
      element: (
        <div>
          <Personal />
        </div>
      )
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
