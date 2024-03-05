import { useLazyQuery } from "@apollo/client";
import { GET_ANIME_COUNT } from "../graphql/user";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import thumbnailImage from "../assets/thumbnail-image.png";
import { ProfileInfo, AnimeList } from "../components";
import { IAnimeCount } from "../types";
import Button from "../components/UI/Button";
import { logout } from "../redux/userSlice";

function Profile() {
  const [list, setList] = useState<IAnimeCount>({
    watched: 0,
    watching: 0,
    planToWatch: 0,
    stalled: 0,
    dropped: 0,
  });

  const {
    _id: userId,
    username,
    registerDate,
    isLogged,
  } = useSelector((state: RootState) => state.userReducer);

  const [getList, { called, data: animeList, loading: isListLoading }] =
    useLazyQuery(GET_ANIME_COUNT, {
      variables: {
        userId,
      },
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    document.cookie = "token=a";
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    } else {
      getList();
    }
  }, []);

  useEffect(() => {
    if (called && !isListLoading) {
      setList(animeList.getAnimeCount);
    }
  }, [called, isListLoading]);

  return (
    <main className="profile-page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="wrapper">
          <ProfileInfo username={username} registerDate={registerDate} />
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
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </main>
  );
}

export default Profile;
