import { useEffect, useState } from "react";
import Select from "../UI/Select";

import { useMutation } from "@apollo/client";
import { ADD_ANIME } from "../../graphql/user";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ModalWindow from "../UI/ModalWindow";
import LoginForm from "../Common/LoginForm";

interface IProps {
  animeId: string;
}

function CategorySelector({ animeId }: IProps) {
  const categoryOptions = [
    { value: "not-watched", text: "not watched" },
    { value: "watched", text: "watched" },
    { value: "watching", text: "watching" },
    { value: "plan-to-watch", text: "plan to watch" },
    { value: "stalled", text: "stalled" },
    { value: "dropped", text: "dropped" },
  ];

  const [queryAdd] = useMutation(ADD_ANIME);

  const [selected, setSelected] = useState(categoryOptions[0].value);
  const [showModal, setShowModal] = useState(false);

  const { _id: userId, isLogged } = useSelector(
    (state: RootState) => state.userReducer
  );

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!isLogged) {
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
      }).then(({ data }) => console.log(data));
    }
  }, [selected]);

  useEffect(() => {
    if (isLogged) {
      setShowModal(false);
    }
  }, [isLogged]);

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
