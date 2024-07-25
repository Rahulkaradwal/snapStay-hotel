import SignupUser from "../components/auth/SignupUser";

function SignUp() {
  return (
    <section className="bg-auth-cover relative h-screen bg-cover">
      <div className="from-dark absolute inset-0 bg-gradient-to-l to-transparent"></div>
      <SignupUser />
    </section>
  );
}

export default SignUp;
