import { useState } from "react";
import ModalWindow from "../../shared/ui/ModalWindow";
import Button from "../../shared/ui/Button";
import LoginForm from "../../components/Common/LoginForm";
import RegisterForm from "../../components/Common/RegisterForm";

function Authorization() {
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
      <Button onClick={handleLoginClick}>login</Button>
      <Button onClick={handleRegisterClick}>register</Button>
    </>
  );
}

export default Authorization;
