import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useEffect, useState } from "react";

import { LOGIN_USER } from "../../graphql/user";
import { useLazyQuery } from "@apollo/client";

import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import createExpireTime from "../../utils/createExpireTime";

interface IProps {
  redirectTo: string;
  state: any;
}

function LoginForm({ redirectTo, state }: IProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isIncorrect, setIsIncorrect] = useState(false);

  const [getUser, { called, data, loading }] = useLazyQuery(LOGIN_USER);

  useEffect(() => {
    if (called && !loading) {
      if (data.loginUser) {
        dispatch(
          login({
            id: data.loginUser.id,
            username: data.loginUser.username,
            registerDate: data.loginUser.registerDate,
            imageUrl: data.loginUser.imageUrl,
            email: "",
            password: ""
          })
        );

        document.cookie = `token=${
          data.loginUser.token
        }; expires=${createExpireTime(1)}`;
      }
    }
  }, [called, loading]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const regEx = /([a-zA-Z0-9]{4,})@((mail)|(gmail))\.((com)|(ru))/;
    if (!email.match(regEx) || password.length < 8) {
      setIsIncorrect(true);
      setEmail("");
      setPassword("");
      return;
    }

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
      <div>
        <label htmlFor="email">Please enter your email</label>
        <Input
          value={email}
          onChange={handleEmailChange}
          type="text"
          placeholder="email"
          name="email"
          onFocus={() => setIsIncorrect(false)}
        />
        <span>{isIncorrect ? "Incorrect email" : ""}</span>
      </div>
      <div>
        <label htmlFor="password">Please enter your password</label>
        <Input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="password"
          name="password"
          onFocus={() => setIsIncorrect(false)}
        />
        <span>{isIncorrect ? "Incorrect password" : ""}</span>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default LoginForm;
