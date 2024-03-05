import { Routes, Route } from "react-router-dom";
import { lazily } from "react-lazily";
import { Suspense, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "./graphql/anime";

import { useDispatch, useSelector } from "react-redux";
import { setAnime } from "./redux/animeSlice";

const { Home, Anime, MyAnime, Profile, Search, Login } = lazily(
  () => import("./Pages")
);
import { Header, Footer } from "./components";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();

  const userId = useSelector((state: RootState) => state.userReducer._id);

  const { data: animeData, loading: isAnimeLoading } = useQuery(GET_ALL_ANIME, {
    variables: {
      userId,
    },
  });

  useEffect(() => {
    if (!isAnimeLoading) {
      dispatch(setAnime(animeData.getAllAnime));
    }
  }, [isAnimeLoading]);

  return (
    <>
      <Header />
      <Suspense fallback={<div className="loading-text">Loading...</div>}>
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
