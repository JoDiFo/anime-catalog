import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../query/anime";
import { GET_ALL_TAGS } from "../query/tags";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import { Content, SortBlock, TagsSelector } from "../components";

import compareStrings from "../Utils/compareStrings";
import compareArrays from "../Utils/compareArrays";

type Anime = {
  id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  animeSeason: AnimeSeason;
  picture: string;
  synonyms: string[];
  tags: string[];
};

type AnimeSeason = {
  season: string;
  year: number;
};

function Search() {
  const { data: animeData, loading: isAnimeLoading } = useQuery(GET_ALL_ANIME);
  const [items, setItems] = useState<Anime[]>([]);

  const { data: tagsData, loading: areTagsLoading } = useQuery(GET_ALL_TAGS);
  const [tags, setTags] = useState([]);

  const [searchString, setSearchString] = useState("");

  const selectedTags = useSelector((state: RootState) => state.tags.value);
  console.log(selectedTags)

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
              <input
                type="text"
                placeholder="Search for the anime title"
                onChange={(e) => setSearchString(e.target.value)}
              />
            </div>
            <SortBlock />
          </div>
          {isAnimeLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            <Content
              items={items
                .filter((item) => compareStrings(item.title, searchString))
                .filter((item) => compareArrays(item.tags, selectedTags))}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;
