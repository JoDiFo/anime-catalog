import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    console.log(email, password);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Form action="submit">
      <h3>Login</h3>
      <label htmlFor="email">Please enter your email</label>
      <Input
        value={email}
        onChange={handleEmailChange}
        type="text"
        placeholder="email"
        name="email"
      />
      <label htmlFor="password">Please enter your password</label>
      <Input
        value={password}
        onChange={handlePasswordChange}
        type="password"
        placeholder="password"
        name="password"
      />
      <Button onClick={handleLogin}>Submit</Button>
    </Form>
  );
}

export default LoginForm;
