import LoginUserForm from "../components/auth/LoginUserForm";

function Login() {
  return (
    <section className="relative h-screen bg-auth-cover bg-cover">
      <div className="absolute inset-0 bg-gradient-to-l from-dark to-transparent"></div>
      <LoginUserForm />
    </section>
  );
}

export default Login;
