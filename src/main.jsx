import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "./views/HomeView.jsx";
import { AboutUsView } from "./views/AboutUsView.jsx";
import Layout from "./views/Layout.jsx";
import { SingupView } from "./views/SignupView.jsx";
import PaymentView from "./views/PaymentView.jsx";
import LoginView from "./views/LoginView.jsx";
import { ContactView } from "./views/ContactView.jsx";
import CollectionView from "./views/Collection/CollectionView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout/>,
        children: [
          { path: "/", element: <HomeView /> },
          { path: "collection", element: <CollectionView/> },
          { path: "about", element: <AboutUsView/> },
          { path: "contact", element: <ContactView/> },
          { path: "login", element: <LoginView/> },
          { path: "signup", element: <SingupView/>},
          { path: "payment", element: <PaymentView/> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
