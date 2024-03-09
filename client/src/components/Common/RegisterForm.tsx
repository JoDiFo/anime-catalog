import { useState } from "react";
import Form from "../UI/Form";
import Button from "../UI/Button";
import Input from "../UI/Input";

import { REGISTER_USER } from "../../graphql/user";
import { useMutation } from "@apollo/client";

import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import createExpireTime from "../../Utils/createExpireTime";

interface IProps {
  redirectTo: string;
}

function RegisterForm({ redirectTo }: IProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isIncorrect, setIsIncorrect] = useState(false);

  const [newUser] = useMutation(REGISTER_USER);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const regEx = /([a-z]{4,})@((mail)|(gmail))\.((com)|(ru))/;
    if (!email.match(regEx) || password.length < 8 || username.length < 4) {
      setIsIncorrect(true);
      setEmail("");
      setPassword("");
      return;
    }

    newUser({
      variables: {
        input: {
          username,
          email,
          password,
        },
      },
    }).then(({ data }) => {
      if (data.createUser) {
        dispatch(
          login({
            _id: data.createUser._id,
            username: data.createUser.username,
            registerDate: data.createUser.registerDate,
          })
        );

        document.cookie = `token=${
          data.createUser.token
        }; expires=${createExpireTime(1)}`;

        navigate(redirectTo);
      } else {
        alert("this user already exists");
      }
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
      <div>
        <label htmlFor="username">Please enter your username</label>
        <Input
          value={username}
          onChange={handleUsernameChange}
          type="text"
          placeholder="username"
          name="username"
          onFocus={() => setIsIncorrect(false)}
        />
        <span>{isIncorrect ? "Incorrect username" : ""}</span>
      </div>
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
        <span>{isIncorrect ? "Incorrect email" : ""}</span>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default RegisterForm;
