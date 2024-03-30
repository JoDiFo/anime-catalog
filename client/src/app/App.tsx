import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { RouterProvider } from "./providers/router";

import { VALIDATE_USER } from "./graphql/user";
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";

import "./styles/index.scss";

function App() {
  const dispatch = useDispatch();

  const [
    callValidation,
    { data: validationData, loading: isValidationLoading, called },
  ] = useLazyQuery(VALIDATE_USER);

  useEffect(() => {
    const refreshToken = document.cookie.split("=");
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      callValidation({
        variables: {
          token: refreshToken,
        },
      });
    } else {
      dispatch(
        login({
          id: localStorage.getItem("userId") as string,
          username: localStorage.getItem("username") as string,
          registerDate: localStorage.getItem("registerDate") as string,
          imageUrl: localStorage.getItem("imageUrl") as string,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (!isValidationLoading && called) {
      console.log(validationData);
    }
  }, [isValidationLoading, called]);

  return (
    <>
      <Header />
      <RouterProvider />
      <Footer />
    </>
  );
}

export default App;
