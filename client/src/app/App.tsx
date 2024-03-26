import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

// import { useQuery } from "@apollo/client";

// import { useDispatch } from "react-redux";

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
// import { VALIDATE_USER } from "./graphql/user";
// import { login } from "./redux/userSlice";

function App() {
  // const dispatch = useDispatch();

  // const { data: validationData, loading: isValidationLoading } = useQuery(
  //   VALIDATE_USER,
  //   {
  //     variables: {
  //       token: document.cookie.split("=")[1] || "a",
  //     },
  //   }
  // );

  // useEffect(() => {
  //   if (!isValidationLoading) {
  //     if (validationData.validateUser.isValid) {
  //       dispatch(
  //         login({
  //           id: validationData.validateUser.id,
  //           username: validationData.validateUser.username,
  //           registerDate: validationData.validateUser.registerDate,
  //           imageUrl: validationData.validateUser.imageUrl,
  //           email: "",
  //           password: ""
  //         })
  //       );
  //     }
  //   }
  // }, [isValidationLoading]);

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
