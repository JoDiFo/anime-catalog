import { LoginForm } from "@/widgets/LoginForm";
import cls from "./LoginPage.module.scss";

function LoginPage() {
  return (
    <div className={cls.LoginPage}>
      <div className={cls.form}>
        <LoginForm redirectTo="/" state={{}} />
      </div>
    </div>
  );
}

export default LoginPage;
