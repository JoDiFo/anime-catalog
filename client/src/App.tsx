import { Routes, Route } from "react-router-dom";

import { Home, Anime, MyAnime, Profile, Search } from "./Pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/anime" element={<MyAnime />} />
        <Route path="/anime" element={<Anime />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
