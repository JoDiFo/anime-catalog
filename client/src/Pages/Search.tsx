import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../query/anime";

import { Content, SortBlock, TagsSelector } from "../components";

function Search() {
  const { data, loading } = useQuery(GET_ALL_ANIME);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!loading) {
      setItems(data.getAllAnime);
    }
  }, [data]);

  return (
    <main className="profile-page">
      <div className="container">
        <div className="wrapper">
          <div className="profile-page__sorting">
            <h3>BROWSE THROUGH ANIME CATALOG</h3>
            <TagsSelector />
            <div className="search-bar">
              <input type="text" placeholder="Search for the anime title" />
            </div>
            <SortBlock />
          </div>
          {loading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            <Content items={items} />
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;
