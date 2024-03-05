import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useEffect, useState } from "react";

import { LOGIN_USER } from "../../graphql/user";
import { useLazyQuery } from "@apollo/client";

import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

interface IProps {
  redirectTo: string;
  state: any;
}

function LoginForm({ redirectTo, state }: IProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [getUser, { called, data, loading }] = useLazyQuery(LOGIN_USER);

  useEffect(() => {
    if (called && !loading) {
      if (data.loginUser) {
        dispatch(
          login({
            _id: data.loginUser._id,
            username: data.loginUser.username,
            registerDate: data.loginUser.registerDate,
          })
        );
      }
    }
  }, [called, loading]);
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getUser({
      variables: {
        email,
        password,
      },
    });
    setEmail("");
    setPassword("");
    navigate(redirectTo, { state });
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
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default LoginForm;
