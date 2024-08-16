import ResetPassowrdForm from "../components/auth/ResetPasswordForm";

function ResetPassword() {
  return (
    <section className="relative h-screen bg-auth-cover bg-cover">
      <div className="inset-0 bg-gradient-to-l from-dark to-transparent md:absolute"></div>
      <ResetPassowrdForm />
    </section>
  );
}

export default ResetPassword;
