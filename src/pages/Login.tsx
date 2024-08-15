import LoginUserForm from "../components/auth/LoginUserForm";

function Login() {
  return (
    <section className="relative h-screen overflow-hidden bg-auth-cover bg-cover">
      <div className="absolute inset-0 from-dark to-transparent md:bg-gradient-to-l"></div>
      <LoginUserForm />
    </section>
  );
}

export default Login;
