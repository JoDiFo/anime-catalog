import { Routes, Route } from "react-router-dom";
// import { useHello } from "./Hooks/useHello";

import { Home, Anime, MyAnime, Profile, Search } from "./Pages";
import { Header, Footer } from "./components";

function App() {
  // const value = useHello();
  // console.log(value);

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
