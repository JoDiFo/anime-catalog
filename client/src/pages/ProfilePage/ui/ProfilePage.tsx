import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { ProfileInfo } from "@/widgets/ProfileInfo";
import { AnimeList } from "@/widgets/AnimeList";
import Button from "@/shared/ui/Button";
import { logout } from "@/app/redux/userSlice";
import { LanguageSelector } from "@/widgets/LanguageSelector";

import { GET_ANIME_COUNT } from "@/app/graphql/user";
import { RootState } from "@/app/redux/store";

import thumbnailImage from "@/shared/assets/thumbnail-image.png";

function ProfilePage() {
  const [list, setList] = useState<EAnimeCount>({
    watched: 0,
    watching: 0,
    planned: 0,
    stalled: 0,
    dropped: 0,
  });

  const {
    id: userId,
    username,
    registerDate,
  } = useSelector((state: RootState) => state.userReducer);

  const [getList, { called, data: animeList, loading: isListLoading }] =
    useLazyQuery(GET_ANIME_COUNT, {
      variables: {
        userId,
      },
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("profilePage");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    document.cookie = "refreshToken=";
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    if (!userId) {
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
            planned={list.planned}
            stalled={list.stalled}
            dropped={list.dropped}
          />
          <div className="page__section">
            <h3>{t("YOU MIGHT ALSO LIKE")}</h3>
            <div className="card-container">
              {/*reserved for card container*/}
              <p>{t("Nothing here yet")}</p>
            </div>
          </div>
          <Button onClick={handleLogout}>{t("Logout")}</Button>
          <LanguageSelector />
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
