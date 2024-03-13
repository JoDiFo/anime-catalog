import { useSelector } from "react-redux";
import thumbnailImage from "../assets/thumbnail-image.png";

import { ProfileInfo, Content } from "../components";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  GET_ALL,
  GET_DROPPED,
  GET_PLANNED,
  GET_STALLED,
  GET_WATCHED,
  GET_WATCHING,
} from "../graphql/user";
import { useNavigate } from "react-router-dom";
import ListSelector from "../components/MyAnime/ListSelector";
import { IOption, IRequest } from "../types";

function MyAnime() {
  const options: IOption[] = [
    { value: "all", text: "all" },
    { value: "watched", text: "watched" },
    { value: "watching", text: "watching" },
    { value: "plan-to-watch", text: "plan to watch" },
    { value: "stalled", text: "stalled" },
    { value: "dropped", text: "dropped" },
  ];

  const [selected, setSelected] = useState<IRequest>(options[2].value);
  const [displayed, setDisplayed] = useState([]);

  const {
    _id: userId,
    username,
    registerDate,
    isLogged,
  } = useSelector((state: RootState) => state.userReducer);

  const [getAll, { called: calledAll, data: all, loading: loadingAll }] =
    useLazyQuery(GET_ALL, {
      variables: {
        userId,
      },
    });

  const [
    getWatched,
    { called: calledWatched, data: watched, loading: loadingWatched },
  ] = useLazyQuery(GET_WATCHED, {
    variables: {
      userId,
    },
  });

  const [
    getWatching,
    { called: calledWatching, data: watching, loading: loadingWatching },
  ] = useLazyQuery(GET_WATCHING, {
    variables: {
      userId,
    },
  });

  const [
    getPlanned,
    { called: calledPlanned, data: planned, loading: loadingPlanned },
  ] = useLazyQuery(GET_PLANNED, {
    variables: {
      userId,
    },
  });

  const [
    getStalled,
    { called: calledStalled, data: stalled, loading: loadingStalled },
  ] = useLazyQuery(GET_STALLED, {
    variables: {
      userId,
    },
  });

  const [
    getDropped,
    { called: calledDropped, data: dropped, loading: loadingDropped },
  ] = useLazyQuery(GET_DROPPED, {
    variables: {
      userId,
    },
  });

  const navigate = useNavigate();

  const handleSelect = (option: IRequest) => {
    setSelected(option);

    switch (option) {
      case "all":
        if (calledAll) setDisplayed(all.getUserAnime);
        else getAll();
        break;
      case "watched":
        if (calledWatched) setDisplayed(watched.getUserWatched);
        else getWatched();
        break;
      case "watching":
        if (calledWatching) setDisplayed(watching.getUserWatching);
        else getWatching();
        break;
      case "plan-to-watch":
        if (calledPlanned) setDisplayed(planned.getUserPlanning);
        else getPlanned();
        break;
      case "stalled":
        if (calledStalled) setDisplayed(stalled.getUserStalled);
        else getStalled();
        break;
      case "dropped":
        if (calledDropped) setDisplayed(dropped.getUserDropped);
        else getDropped();
        break;
    }
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    } else {
      getWatched();
    }
  }, [getWatched, isLogged, navigate]);

  useEffect(() => {
    if (calledAll && !loadingAll) {
      setDisplayed(all.getUserAnime);
    }
  }, [calledAll, loadingAll, all]);

  useEffect(() => {
    if (calledWatched && !loadingWatched) {
      setDisplayed(watched.getUserWatched);
    }
  }, [calledWatched, loadingWatched, watched]);

  useEffect(() => {
    if (calledWatching && !loadingWatching) {
      setDisplayed(watching.getUserWatching);
    }
  }, [calledWatching, loadingWatching, watching]);

  useEffect(() => {
    if (calledPlanned && !loadingPlanned) {
      setDisplayed(planned.getUserPlanning);
    }
  }, [calledPlanned, loadingPlanned, planned]);

  useEffect(() => {
    if (calledStalled && !loadingStalled) {
      setDisplayed(stalled.getUserStalled);
    }
  }, [calledStalled, loadingStalled, stalled]);

  useEffect(() => {
    if (calledDropped && !loadingDropped) {
      setDisplayed(dropped.getUserDropped);
    }
  }, [calledDropped, loadingDropped, dropped]);

  return (
    <main className="page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="wrapper">
          <ProfileInfo username={username} registerDate={registerDate} />
          <ListSelector
            options={options}
            selected={selected}
            onClick={(value) => handleSelect(value)}
          />
          <Content items={displayed} />
        </div>
      </div>
    </main>
  );
}

export default MyAnime;
