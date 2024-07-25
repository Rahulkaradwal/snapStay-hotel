import LoginUser from "../components/auth/LoginUser";

function Login() {
  return (
    <section className="bg-auth-cover relative h-screen bg-cover">
      <div className="from-dark absolute inset-0 bg-gradient-to-l to-transparent"></div>
      <LoginUser />
    </section>
  );
}

export default Login;
