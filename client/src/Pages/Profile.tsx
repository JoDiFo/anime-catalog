import thumbnailImage from "../assets/thumbnail-image.png";

import { useQuery } from "@apollo/client";
import { GET_ANIME_COUNT } from "../query/user";

import { useEffect, useState } from "react";
import { IAnimeCount } from "../types";

import { useSelector } from "react-redux";

import { ProfileInfo, AnimeList } from "../components";
import { RootState } from "../redux/store";

function Profile() {
  const [list, setList] = useState<IAnimeCount>({
    watched: 0,
    watching: 0,
    planToWatch: 0,
    stalled: 0,
    dropped: 0,
  });

  const userId = useSelector((state: RootState) => state.userReducer._id);

  const { data: animeList, loading: isListLoading } = useQuery(
    GET_ANIME_COUNT,
    {
      variables: {
        userId,
      },
    }
  );

  useEffect(() => {
    if (!isListLoading) {
      console.log(animeList);
      setList(animeList.getAnimeCount);
    }
  }, [isListLoading]);

  return (
    <main className="profile-page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="wrapper">
          <ProfileInfo />
          <AnimeList
            watched={list.watched}
            watching={list.watching}
            planToWatch={list.planToWatch}
            stalled={list.stalled}
            dropped={list.dropped}
          />
          <div className="profile-page__section">
            <h3>YOU MIGHT ALSO LIKE</h3>
            <div className="card-container">
              {/*reserved for card container*/}
              <p>Nothing here yet</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
