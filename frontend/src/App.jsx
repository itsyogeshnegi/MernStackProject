import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Store/Store";
import { Provider } from "react-redux";
import LogIn from "./Pages/LogIn/LogIn";
import Dashboard from "./Pages/Dashboard/Dashboard";
const App = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <LogIn /> },
    { path: "/Dashboard", element: <Dashboard /> },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
};

export default App;
