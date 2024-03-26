import LoginForm from "../../../components/Common/LoginForm";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-page__form">
        <LoginForm redirectTo="/" state={{}} />
      </div>
    </div>
  );
}

export default LoginPage;
