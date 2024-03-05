import LoginForm from "../components/Common/LoginForm";

function Login() {
  return (
    <div className="login-page">
      <div className="login-page__form">
        <LoginForm redirectTo="/" state={{}} />
      </div>
    </div>
  );
}

export default Login;
