import SignupUserForm from "../components/auth/SignupUserForm";

function SignUp() {
  return (
    <section className="relative h-screen overflow-hidden bg-auth-cover bg-cover">
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent md:bg-gradient-to-l"></div>
      <SignupUserForm />
    </section>
  );
}

export default SignUp;
