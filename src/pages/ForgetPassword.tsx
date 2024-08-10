import ForgetPasswordForm from "../components/auth/ForgetPasswordForm";

function ForgetPassword() {
  return (
    <section className="relative h-screen bg-auth-cover bg-cover">
      <div className="absolute inset-0 bg-gradient-to-l from-dark to-transparent"></div>
      <ForgetPasswordForm />
    </section>
  );
}

export default ForgetPassword;
