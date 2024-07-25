import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Detail from "./pages/Detail";
import Rooms from "./pages/Rooms";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/details",
        element: <Detail />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
    ],
  },
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
