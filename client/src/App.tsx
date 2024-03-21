import { Routes, Route } from "react-router-dom";
import { lazily } from "react-lazily";
import { Suspense, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { useDispatch } from "react-redux";

const { Home, Anime, MyAnime, Profile, Search, Login } = lazily(
  () => import("./pages")
);
import { Header, Footer, Loading } from "./components";
import { VALIDATE_USER } from "./graphql/user";
import { login } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  const { data: validationData, loading: isValidationLoading } = useQuery(
    VALIDATE_USER,
    {
      variables: {
        token: document.cookie.split("=")[1] || "a",
      },
    }
  );

  useEffect(() => {
    if (!isValidationLoading) {
      if (validationData.validateUser.isValid) {
        dispatch(
          login({
            id: validationData.validateUser.id,
            username: validationData.validateUser.username,
            registerDate: validationData.validateUser.registerDate,
            imageUrl: validationData.validateUser.imageUrl,
            email: "",
            password: ""
          })
        );
      }
    }
  }, [isValidationLoading]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/anime" element={<MyAnime />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
