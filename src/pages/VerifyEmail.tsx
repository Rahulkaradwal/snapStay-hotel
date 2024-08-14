import { Spinner } from "flowbite-react";
import Footer from "../ui/Footer";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { LoaderData } from "../api/types";

function VerifyEmail() {
  const navigate = useNavigation();
  const data = useLoaderData() as LoaderData;

  return (
    <div className="">
      <div className="flex h-[29rem] flex-col items-center justify-center gap-6 bg-ligthDark p-52">
        {navigate.state === "loading" ? (
          <Spinner color="warning" size="xl" />
        ) : (
          <>
            {data.status === "success" ? (
              <>
                <h1 className="text-2xl font-bold text-white">
                  {data.message}
                </h1>
                <Link
                  to="/login"
                  className="rounded-md bg-golden-800 px-4 py-2 text-2xl font-bold text-white"
                >
                  Login Now
                </Link>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-golden-800">
                  {data.message}
                </h1>
                <Link
                  to="/signup"
                  className="rounded-md bg-golden-800 px-4 py-2 text-2xl font-bold text-white transition-all duration-500 hover:bg-slate-50 hover:text-golden-800"
                >
                  Sign Up Again
                </Link>
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default VerifyEmail;
