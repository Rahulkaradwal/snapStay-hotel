import SignupUserForm from "../components/auth/SignupUserForm";

function SignUp() {
  return (
    <section className="relative h-screen bg-auth-cover bg-cover">
      <div className="absolute inset-0 bg-gradient-to-l from-dark to-transparent"></div>
      <SignupUserForm />
    </section>
  );
}

export default SignUp;
