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
import CheckIn from "./pages/CheckIn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking/:id",
        element: <Booking />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/details/:roomId",
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
      {
        path: "/check-in",
        element: <CheckIn />,
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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000 * 60, // 5 minute
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          success: {
            duration: 3000,
            },
            error: { duration: 5000 },
            }}
            containerClassName="text-gray-700 max-w-xl text-base bg-gray-100 p-4"
            /> */}

        <RouterProvider router={router} />

        <ReactQueryDevtools />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
