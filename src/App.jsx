import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Add from "./pages/add/Add";
import Register from "./pages/register/Register";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import "./app.scss";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/add",
          element: <Add />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
