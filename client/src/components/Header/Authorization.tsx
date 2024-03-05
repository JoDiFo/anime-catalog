import { useState } from "react";
import ModalWindow from "../UI/ModalWindow";
import Button from "../UI/Button";
import LoginForm from "../Common/LoginForm";
import RegisterForm from "../Common/RegisterForm";
import { useLocation } from "react-router-dom";

function Authorization() {
  const location = useLocation();

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
        <LoginForm redirectTo={location.pathname} />
      </ModalWindow>
      <ModalWindow
        visible={showRegister}
        setVisible={(flag) => setShowRegister(flag)}
      >
        <RegisterForm redirectTo={location.pathname} />
      </ModalWindow>
      <Button onClick={handleLoginClick}>login</Button>
      <Button onClick={handleRegisterClick}>register</Button>
    </>
  );
}

export default Authorization;
