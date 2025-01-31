import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/RootLayout";
import App from "./App";
import Learn from "./pages/learn";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/learn/:lang",
        element: <Learn />,
      },
    ],
  },
  {
    path: "/success",
    element: (
      <>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXt0sFO6chvX2IDmK4Cg4OCz5_tfb5kvdw7u-TqS8n73zRyJUANYIYZZUbPTL7hovOWY&usqp=CAU"
          alt=""
        />
      </>
    ),
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
