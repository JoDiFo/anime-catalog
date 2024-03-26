import { useEffect, useState } from "react";
import Select from "../../../shared/ui/Select";

import { useMutation } from "@apollo/client";
import { ADD_ANIME, REMOVE_ANIME } from "../../../app/graphql/user";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import ModalWindow from "../../../shared/ui/ModalWindow";
import LoginForm from "../../../components/Common/LoginForm";
import { load } from "@/app/redux/animeSlice";
import cls from "./CategorySelector.module.scss";

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
    <div className={cls.CategorySelector}>
      <ModalWindow
        visible={showModal}
        setVisible={(flag) => setShowModal(flag)}
      >
        <LoginForm redirectTo={"/anime"} state={{ id: animeId }} />
      </ModalWindow>
      <h4>MY ANIME:</h4>
      <div className={cls.selector}>
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
