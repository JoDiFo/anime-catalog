import { Routes, Route } from "react-router-dom";
import { lazily } from "react-lazily";
import { Suspense } from "react";

const { Home, Anime, MyAnime, Profile, Search } = lazily(
  () => import("./Pages")
);
import { Header, Footer } from "./components";

function App() {
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
