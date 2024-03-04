import { Routes, Route } from "react-router-dom";
import { lazily } from "react-lazily";
import { Suspense, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "./graphql/anime";
import { GET_ALL_TAGS } from "./graphql/tags";

import { useDispatch } from "react-redux";
import { setAnime } from "./redux/animeSlice";
import { setTags } from "./redux/tagsSlice";

const { Home, Anime, MyAnime, Profile, Search } = lazily(
  () => import("./Pages")
);
import { Header, Footer } from "./components";

function App() {
  const dispatch = useDispatch();

  const { data: animeData, loading: isAnimeLoading } = useQuery(GET_ALL_ANIME);
  const { data: tagsData, loading: areTagsLoading } = useQuery(GET_ALL_TAGS);

  useEffect(() => {
    if (!isAnimeLoading) {
      dispatch(setAnime(animeData.getAllAnime));
    }
  }, [isAnimeLoading]);

  useEffect(() => {
    if (!areTagsLoading) {
      dispatch(setTags(tagsData.getAllTags));
    }
  }, [areTagsLoading]);

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
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
