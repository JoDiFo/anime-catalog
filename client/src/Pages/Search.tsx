import { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import type { RootState } from "../redux/store";

import { Content, SortBlock, TagsBlock } from "../components";

import useDebounce from "../Hooks/useDebounce";

import { IAnime } from "../types";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../graphql/anime";
import { notLoad } from "../redux/animeSlice";

function Search() {
  const dispatch = useDispatch();

  const selectedTags = useSelector(
    (state: RootState) => state.tags.selected,
    shallowEqual
  );

  const tags = useMemo(
    () => selectedTags.map((item) => item.value),
    [selectedTags]
  );

  const needLoad = useSelector((state: RootState) => state.anime.requestReload);
  const userId = useSelector((state: RootState) => state.userReducer._id);

  const [anime, setAnime] = useState<IAnime[]>([]);
  const [searchString, setSearchString] = useState("");

  const debouncedValue = useDebounce(searchString, 500);

  const [
    getAll,
    { data: animeData, loading: isAnimeLoading, called, refetch },
  ] = useLazyQuery(GET_ALL_ANIME, {
    pollInterval: 0,
  });

  useEffect(() => {
    if (called && !isAnimeLoading) {
      setAnime(animeData.getAllAnime);
    }
  }, [called, isAnimeLoading, animeData.getAllAnime]);

  useEffect(() => {
    if (needLoad) {
      refetch({
        userId,
        searchString,
        tags,
      });
      dispatch(notLoad());
    }
  }, [needLoad]);

  useEffect(() => {
    if (!called) {
      getAll({
        variables: {
          userId,
          searchString,
          tags,
        },
      });
    } else {
      refetch({
        userId,
        searchString,
        tags,
      });
    }
  }, [debouncedValue, selectedTags]);

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
            <Content items={anime} />
          ) : (
            <div className="loading-text">Loading...</div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;
