import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import { Content, SortBlock, TagsBlock } from "../components";

import compareStrings from "../Utils/compareStrings";
import compareArrays from "../Utils/compareArrays";
import useDebounce from "../Hooks/useDebounce";

function Search() {
  const anime = useSelector((state: RootState) => state.anime.items);
  const selectedTags = useSelector((state: RootState) => state.tags.selected);

  const [searchString, setSearchString] = useState("");
  const [displayedItems, setDisplayedItems] = useState<IAnime[]>(anime);

  const debouncedValue = useDebounce(searchString, 500);

  useEffect(() => {
    const newItems = anime
      .filter((item) => compareStrings(item.title, debouncedValue))
      .filter((item) => compareArrays(item.tags, selectedTags));
    setDisplayedItems(newItems);
  }, [debouncedValue, anime, selectedTags]);

  return (
    <main className="profile-page">
      <div className="container">
        <div className="wrapper">
          <div className="profile-page__sorting">
            <h3>BROWSE THROUGH ANIME CATALOG</h3>
            <TagsBlock />
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for the anime title"
                onChange={(e) => setSearchString(e.target.value)}
              />
            </div>
            <SortBlock />
          </div>
          {anime.length !== 0 ? (
            <Content items={displayedItems} />
          ) : (
            <div className="loading-text">Loading...</div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;
