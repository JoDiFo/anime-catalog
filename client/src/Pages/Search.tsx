import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import { Content, SortBlock, TagsBlock } from "../components";

import compareStrings from "../Utils/compareStrings";
import compareArrays from "../Utils/compareArrays";
import useDebounce from "../Hooks/useDebounce";

import { IAnime } from "../types";
import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../graphql/anime";
import { notLoad } from "../redux/animeSlice";

function Search() {
  const dispatch = useDispatch();
  const selectedTags = useSelector((state: RootState) => state.tags.selected);
  const needLoad = useSelector((state: RootState) => state.anime.requestReload);

  const userId = useSelector((state: RootState) => state.userReducer._id);

  const {
    data: animeData,
    loading: isAnimeLoading,
    refetch,
  } = useQuery(GET_ALL_ANIME, {
    variables: {
      userId,
    },
    pollInterval: 0,
  });

  const [anime, setAnime] = useState<IAnime[]>([]);
  const [searchString, setSearchString] = useState("");
  const [displayedItems, setDisplayedItems] = useState<IAnime[]>(anime);

  const debouncedValue = useDebounce(searchString, 500);

  useEffect(() => {
    if (!isAnimeLoading) {
      setAnime(animeData.getAllAnime);
    }
  }, [isAnimeLoading]);

  useEffect(() => {
    if (needLoad) {
      refetch();
      dispatch(notLoad());
    }
  }, [needLoad]);

  useEffect(() => {
    const newItems = anime
      .filter((item: IAnime) => compareStrings(item.title, debouncedValue))
      .filter((item: IAnime) =>
        compareArrays(
          item.tags,
          selectedTags.map((item) => item.value)
        )
      );
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
