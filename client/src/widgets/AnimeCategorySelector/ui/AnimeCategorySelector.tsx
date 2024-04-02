import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";

import Select from "@/shared/ui/Select";
import ModalWindow from "@/shared/ui/ModalWindow";
import { LoginForm } from "@/widgets/LoginForm";
import { load } from "@/app/redux/animeSlice";

import { RootState } from "@/app/redux/store";
import { ADD_ANIME, REMOVE_ANIME } from "@/app/graphql/user";

import cls from "./AnimeCategorySelector.module.scss";

interface AnimeCategorySelector {
  animeId: string;
  defaultValue: string;
  onChange: () => void;
}

function AnimeCategorySelector({
  animeId,
  defaultValue,
  onChange,
}: AnimeCategorySelector) {
  const dispatch = useDispatch();
  const { t } = useTranslation("profilePage");

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
    <div className={cls.AnimeCategorySelector}>
      <ModalWindow
        visible={showModal}
        setVisible={(flag) => setShowModal(flag)}
      >
        <LoginForm redirectTo={"/anime"} state={{ id: animeId }} />
      </ModalWindow>
      <h4>{t("MY ANIME")}:</h4>
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

export default AnimeCategorySelector;
