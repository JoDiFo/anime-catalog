import { useState } from "react";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import { Content, SortBlock, TagsSelector } from "../components";

import compareStrings from "../Utils/compareStrings";
import compareArrays from "../Utils/compareArrays";

function Search() {
  const [searchString, setSearchString] = useState("");

  const anime = useSelector((state: RootState) => state.anime.value);
  const tags = useSelector((state: RootState) => state.tags.value);
  const selectedTags = useSelector((state: RootState) => state.tags.selected);

  return (
    <main className="profile-page">
      <div className="container">
        <div className="wrapper">
          <div className="profile-page__sorting">
            <h3>BROWSE THROUGH ANIME CATALOG</h3>
            <TagsSelector tags={tags} />
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for the anime title"
                onChange={(e) => setSearchString(e.target.value)}
              />
            </div>
            <SortBlock />
          </div>
          {anime ? (
            <Content
              items={anime
                .filter((item) => compareStrings(item.title, searchString))
                .filter((item) => compareArrays(item.tags, selectedTags))}
            />
          ) : (
            <div className="loading-text">Loading...</div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;
