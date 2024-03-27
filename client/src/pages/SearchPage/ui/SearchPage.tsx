import { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import type { RootState } from "@/app/redux/store";

import { Loading } from "@/widgets/Loading";
import { Content, TagsBlock } from "../../../components";

import useDebounce from "@/shared/Hooks/useDebounce";

import { useLazyQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "@/app/graphql/anime";
import { notLoad } from "@/app/redux/animeSlice";
import SearchBar from "../../../components/Search/SearchBar";
import { SortBlock } from "@/widgets/SortBlock";

function SearchPage() {
  const dispatch = useDispatch();

  const sortOptions = [
    { value: "anime_id", text: "default" },
    { value: "episodes", text: "number of episodes" },
    { value: "year", text: "release date" },
  ];

  const selectedTags = useSelector(
    (state: RootState) => state.tags.selected,
    shallowEqual
  );

  const tags = useMemo(
    () => selectedTags.map((item) => item.value),
    [selectedTags]
  );

  const needLoad = useSelector((state: RootState) => state.anime.requestReload);
  const userId = useSelector((state: RootState) => state.userReducer.id);

  const [anime, setAnime] = useState<EAnime[]>([]);
  const [searchString, setSearchString] = useState("");
  const [sort, setSort] = useState(sortOptions[0].value);

  const debouncedValue = useDebounce(searchString, 500);

  const [
    getAll,
    { data: animeData, loading: isAnimeLoading, called, refetch },
  ] = useLazyQuery(GET_ALL_ANIME);

  useEffect(() => {
    if (called && !isAnimeLoading) {
      setAnime(animeData.getAllAnime);
    }
  }, [called, isAnimeLoading, animeData?.getAllAnime]);

  useEffect(() => {
    if (called && needLoad) {
      refetch({
        userId,
        searchString,
        tags,
        sort
      });
      dispatch(notLoad());
    }
  }, [needLoad, called]);

  useEffect(() => {
    if (!called) {
      getAll({
        variables: {
          userId,
          searchString,
          tags,
          sort
        },
      });
    } else {
      refetch({
        userId,
        searchString,
        tags,
        sort
      });
    }
  }, [debouncedValue, selectedTags, sort]);

  return (
    <main className="page">
      <div className="container">
        <div className="wrapper">
          <div className="page__sorting">
            <h3>BROWSE THROUGH ANIME CATALOG</h3>
            <TagsBlock />
            <SearchBar handleChange={(value) => setSearchString(value)} />
            <SortBlock
              sortOptions={sortOptions}
              onSelect={(value) => setSort(value)}
            />
          </div>
          {!isAnimeLoading ? <Content items={anime} /> : <Loading />}
        </div>
      </div>
    </main>
  );
}

export default SearchPage;
