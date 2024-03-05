import { useState } from "react";
import ModalWindow from "../UI/ModalWindow";
import Button from "../UI/Button";
import LoginForm from "../Common/LoginForm";
import RegisterForm from "../Common/RegisterForm";

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
