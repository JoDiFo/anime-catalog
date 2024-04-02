import { useState } from "react";
import { useTranslation } from "react-i18next";

import ModalWindow from "@/shared/ui/ModalWindow";
import Button from "@/shared/ui/Button";
import { LoginForm } from "@/widgets/LoginForm";
import { RegisterForm } from "@/widgets/RegisterForm";

function AuthorizationLinks() {
  const { t } = useTranslation("translation");

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <>
      <ModalWindow
        visible={showLogin}
        setVisible={(flag) => setShowLogin(flag)}
      >
        <LoginForm redirectTo={"/"} state={{}} />
      </ModalWindow>
      <ModalWindow
        visible={showRegister}
        setVisible={(flag) => setShowRegister(flag)}
      >
        <RegisterForm redirectTo={"/"} />
      </ModalWindow>
      <Button onClick={handleLoginClick}>{t("Login")}</Button>
      <Button onClick={handleRegisterClick}>{t("Register")}</Button>
    </>
  );
}

export default AuthorizationLinks;
