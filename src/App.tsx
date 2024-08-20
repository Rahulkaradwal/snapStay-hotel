import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import AppLayout from "./components/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import ProtectRoute from "./components/ProtectRoute";
import { verifyEmailLoader } from "./api/Auth/verifyEmailLoader";
import { Spinner } from "flowbite-react";

// Lazy load the page components
const Home = React.lazy(() => import("./pages/Home"));
const Booking = React.lazy(() => import("./pages/Booking"));
const Services = React.lazy(() => import("./pages/Services"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const Detail = React.lazy(() => import("./pages/Detail"));
const Rooms = React.lazy(() => import("./pages/Rooms"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const CheckIn = React.lazy(() => import("./pages/CheckIn"));
const ForgetPassword = React.lazy(() => import("./pages/ForgetPassword"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const VerifyEmail = React.lazy(() => import("./pages/VerifyEmail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const spinner = (
  <div className="flex h-screen items-center justify-center bg-ligthDark">
    <Spinner color="warning" size="xl" />
  </div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={spinner}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/booking",
        element: (
          <ProtectRoute>
            <Suspense fallback={spinner}>
              <Booking />
            </Suspense>
          </ProtectRoute>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={spinner}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/details/:roomId",
        element: (
          <ProtectRoute>
            <Suspense fallback={spinner}>
              <Detail />
            </Suspense>
          </ProtectRoute>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={spinner}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/rooms",
        element: (
          <Suspense fallback={spinner}>
            <Rooms />
          </Suspense>
        ),
      },
      {
        path: "/check-in/:bookingId",
        element: (
          <ProtectRoute>
            <Suspense fallback={spinner}>
              <CheckIn />
            </Suspense>
          </ProtectRoute>
        ),
      },
      {
        path: "/verify-email/:token",
        element: (
          <Suspense fallback={spinner}>
            <VerifyEmail />
          </Suspense>
        ),
        loader: verifyEmailLoader,
      },
      {
        path: "login",
        element: (
          <Suspense fallback={spinner}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "forget-password",
        element: (
          <Suspense fallback={spinner}>
            <ForgetPassword />
          </Suspense>
        ),
      },
      {
        path: "reset-password/:token",
        element: (
          <Suspense fallback={spinner}>
            <ResetPassword />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={spinner}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={spinner}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
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
        <Toaster
          position="top-center"
          reverseOrder={true}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: { duration: 5000 },
          }}
        />

        <RouterProvider router={router} />

        <ReactQueryDevtools />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
