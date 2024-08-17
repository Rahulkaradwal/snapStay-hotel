import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../api/types";
import DirectUser from "../components/verifyEmail/DirectUser";

function VerifyEmail() {
  const data = useLoaderData() as LoaderData;

  return (
    <section className="flex h-screen items-center justify-center bg-auth-cover bg-cover text-center">
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent md:bg-gradient-to-l"></div>

      {data.status === "success" ? (
        <DirectUser message={data.message} link="login" name="Login" />
      ) : (
        <DirectUser message={data.message} link="signup" name="Sign Up" />
      )}
    </section>
  );
}

export default VerifyEmail;
