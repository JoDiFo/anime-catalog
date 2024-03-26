import { Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";

import { useLazyQuery } from "@apollo/client";

import { HomePage } from "@/pages/HomePage";
import { ProfilePage } from "@/pages/ProfilePage";
import { SearchPage } from "@/pages/SearchPage";
import { LoginPage } from "@/pages/LoginPage";
import { UserAnime } from "@/pages/UserAnimePage";
import { AnimePage } from "@/pages/AnimePage";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Loading } from "@/widgets/Loading";

import "./styles/index.scss";
import { VALIDATE_USER } from "./graphql/user";
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  const [
    callValidation,
    { data: validationData, loading: isValidationLoading, called },
  ] = useLazyQuery(VALIDATE_USER);

  useEffect(() => {
    const [refreshToken, accessToken] = document.cookie.split(" ");
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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/anime" element={<UserAnime />} />
          <Route path="/anime" element={<AnimePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
