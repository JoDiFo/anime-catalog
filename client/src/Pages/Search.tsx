import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../query/anime";
import { GET_ALL_TAGS } from "../query/tags";

import { Content, SortBlock, TagsSelector } from "../components";

function Search() {
  const { data: animeData, loading: isAnimeLoading } = useQuery(GET_ALL_ANIME);
  const [items, setItems] = useState([]);

  const { data: tagsData, loading: areTagsLoading } = useQuery(GET_ALL_TAGS);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (!isAnimeLoading) {
      setItems(animeData.getAllAnime);
    }
  }, [animeData]);

  useEffect(() => {
    if (!areTagsLoading) {
      setTags(tagsData.getAllTags);
    }
  }, [tagsData]);

  return (
    <main className="profile-page">
      <div className="container">
        <div className="wrapper">
          <div className="profile-page__sorting">
            <h3>BROWSE THROUGH ANIME CATALOG</h3>
            <TagsSelector tags={tags} />
            <div className="search-bar">
              <input type="text" placeholder="Search for the anime title" />
            </div>
            <SortBlock />
          </div>
          {isAnimeLoading ? (
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
