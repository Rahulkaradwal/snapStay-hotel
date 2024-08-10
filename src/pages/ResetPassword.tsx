import ResetPassowrdForm from "../components/auth/ResetPasswordForm";

function ResetPassword() {
  return (
    <section className="relative h-screen bg-auth-cover bg-cover">
      <div className="absolute inset-0 bg-gradient-to-l from-dark to-transparent"></div>
      <ResetPassowrdForm />
    </section>
  );
}

export default ResetPassword;
