import ForgetPasswordForm from "../components/auth/ForgetPasswordForm";

function ForgetPassword() {
  return (
    <section className="relative h-screen overflow-hidden bg-auth-cover bg-cover">
      <div className="inset-0 bg-gradient-to-l from-dark to-transparent md:absolute"></div>
      <ForgetPasswordForm />
    </section>
  );
}

export default ForgetPassword;
