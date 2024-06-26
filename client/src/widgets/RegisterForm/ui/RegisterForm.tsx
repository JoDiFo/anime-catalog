import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";

import Form from "@/shared/ui/Form";
import { Button } from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import { login } from "@/app/redux/userSlice";

import { REGISTER_USER } from "@/app/graphql/user";
import createExpireTime from "@/shared/lib/createExpireTime";

interface RegisterFormProps {
  redirectTo: string;
}

// TODO abstract fields validation into separate functions

export function RegisterForm({ redirectTo }: RegisterFormProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("translation");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isIncorrect, setIsIncorrect] = useState(false);

  const [register] = useMutation(REGISTER_USER);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const regEx = /([a-zA-Z0-9]{4,})@((mail)|(gmail))\.((com)|(ru))/;
    if (
      !email.match(regEx) ||
      password.length < 8 ||
      username.length < 4 ||
      username.length > 15
    ) {
      setIsIncorrect(true);
      setEmail("");
      setPassword("");
      return;
    }

    register({
      variables: {
        username,
        email,
        password,
      },
    }).then(({ data }) => {
      if (data.registerUser) {
        dispatch(
          login({
            id: data.registerUser.id,
            username: data.registerUser.username,
            registerDate: data.registerUser.registerDate,
            imageUrl: data.registerUser.imageUrl,
          })
        );

        document.cookie = `refreshToken=${
          data.registerUser.refreshToken
        }; expires=${createExpireTime(1)}`;

        localStorage.setItem("userId", data.registerUser.id);
        localStorage.setItem("username", data.registerUser.username);
        localStorage.setItem("registerDate", data.registerUser.registerDate);
        localStorage.setItem("imageUrl", data.registerUser.imageUrl);
        localStorage.setItem("accessToken", data.registerUser.accessToken);

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
      <h3>{t("Register")}</h3>
      <div>
        <label htmlFor="username">{t("Please enter your username")}</label>
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
        <label htmlFor="email">{t("Please enter your email")}</label>
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
        <label htmlFor="password">{t("Please enter your password")}</label>
        <Input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="password (at least 8 characters)"
          name="password"
          onFocus={() => setIsIncorrect(false)}
        />
        <span>{isIncorrect ? "Incorrect password" : ""}</span>
      </div>
      <Button onClick={handleSubmit}>{t("Submit")}</Button>
    </Form>
  );
}
