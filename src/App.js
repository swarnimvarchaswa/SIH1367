import State from "./components/state"
import Form from "./components/form"

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
      )
    },
    {
      path: "/form/:state",
      element: (
        <div>
          <Form />
        </div>
      )
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
