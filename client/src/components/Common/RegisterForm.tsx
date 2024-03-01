import { useState } from "react";
import Form from "../UI/Form";
import Button from "../UI/Button";
import Input from "../UI/Input";

import { REGISTER_USER } from "../../query/user";
import { useMutation } from "@apollo/client";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newUser] = useMutation(REGISTER_USER);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    newUser({
      variables: {
        input: {
          username,
          email,
          password,
        },
      },
    }).then(({ data }) => {
      console.log(data);
      setUsername("");
      setEmail("");
      setPassword("");
    });
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
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default RegisterForm;
