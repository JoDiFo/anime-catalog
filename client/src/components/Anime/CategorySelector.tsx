import { useEffect, useState } from "react";
import Select from "../UI/Select";

import { useMutation } from "@apollo/client";
import { ADD_ANIME, REMOVE_ANIME } from "../../graphql/user";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ModalWindow from "../UI/ModalWindow";
import LoginForm from "../Common/LoginForm";
import { load } from "../../redux/animeSlice";

interface IProps {
  animeId: string;
  defaultValue: string;
  onChange: () => void;
}

function CategorySelector({ animeId, defaultValue, onChange }: IProps) {
  const dispatch = useDispatch();
  const categoryOptions = [
    { value: "not-watched", text: "not watched" },
    { value: "watched", text: "watched" },
    { value: "watching", text: "watching" },
    { value: "planned", text: "plan to watch" },
    { value: "stalled", text: "stalled" },
    { value: "dropped", text: "dropped" },
  ];

  const initialValue = categoryOptions.find(
    (item) => item.value === defaultValue
  )?.value;

  const [queryAdd] = useMutation(ADD_ANIME);
  const [queryRemove] = useMutation(REMOVE_ANIME);

  const [selected, setSelected] = useState(initialValue);
  const [showModal, setShowModal] = useState(false);

  const userId = useSelector((state: RootState) => state.userReducer.id);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!userId) {
      setShowModal(true);
    } else {
      setSelected(event.target.value);
    }
  };

  useEffect(() => {
    if (selected !== "not-watched") {
      queryAdd({
        variables: {
          userId,
          animeId,
          category: selected,
        },
      }).then(() => {
        dispatch(load());
        onChange();
      });
    } else {
      queryRemove({
        variables: {
          userId,
          animeId,
        },
      });
    }
  }, [selected]);

  useEffect(() => {
    if (userId) {
      setShowModal(false);
    }
  }, [userId]);

  return (
    <div className="anime-page__my-list">
      <ModalWindow
        visible={showModal}
        setVisible={(flag) => setShowModal(flag)}
      >
        <LoginForm redirectTo={"/anime"} state={{ id: animeId }} />
      </ModalWindow>
      <h4 className="anime-page__my-list__title">MY ANIME:</h4>
      <div className="anime-page__select">
        <span className={`dot ${selected}`}></span>
        <Select
          value={selected}
          name="list-select"
          id="list-select"
          onChange={handleSelect}
        >
          {categoryOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default CategorySelector;
