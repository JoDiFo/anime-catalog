import { useState } from "react";
import Form from "../UI/Form";
import Button from "../UI/Button";
import Input from "../UI/Input";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    console.log(username, email, password);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Form action="submit">
      <h3>Register</h3>
      <label htmlFor="username">Please enter your username</label>
      <Input
        value={username}
        onChange={handleUsernameChange}
        type="text"
        placeholder="username"
        name="username"
      />
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

export default RegisterForm;
