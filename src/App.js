import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/signup";
import Form from "./components/form";
import Layout from "./components/layout";
import Contact from "./components/contact_us";
import Home from "./components/home";

function App() {
  const Router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "contact_us",
            element: <Contact />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "/", 
            element: <Form />,
          },
          {
            path: "sign-up",
            element: <Signup />,
          },
          
        ],
      },
    ],
    { basename: "/login_ui" }
  );

  return <RouterProvider router={Router} />;
}

export default App;
