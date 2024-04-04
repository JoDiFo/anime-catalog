import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import Form from "@/shared/ui/Form";
import Input from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { login } from "@/app/redux/userSlice";

import { LOGIN_USER } from "@/app/graphql/user";
import createExpireTime from "@/shared/lib/createExpireTime";

interface LoginFormProps {
  redirectTo: string;
  state?: { id: string };
}

export function LoginForm({ redirectTo, state }: LoginFormProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("translation");

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
          }),
        );

        document.cookie = `refreshToken=${
          data.loginUser.refreshToken
        }; expires=${createExpireTime(1)}`;

        localStorage.setItem("userId", data.loginUser.id);
        localStorage.setItem("username", data.loginUser.username);
        localStorage.setItem("registerDate", data.loginUser.registerDate);
        localStorage.setItem("imageUrl", data.loginUser.imageUrl);
        localStorage.setItem("accessToken", data.loginUser.accessToken);
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
      <h3>{t("Login")}</h3>
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
          placeholder="password"
          name="password"
          onFocus={() => setIsIncorrect(false)}
        />
        <span>{isIncorrect ? "Incorrect password" : ""}</span>
      </div>
      <Button onClick={handleSubmit}>{t("Submit")}</Button>
    </Form>
  );
}
