import { memo } from "react";
import classNames from "classnames";
import { changeLanguage } from "i18next";

import Select from "@/shared/ui/Select";
import { SelectStyles } from "@/shared/ui/Select/Select";

import cls from "./LanguageSelector.module.scss";

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector = ({ className }: LanguageSelectorProps) => {
  const languageOptions = [
    { value: "en", text: "en" },
    { value: "de", text: "de" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };

  return (
    <Select
      className={classNames(cls.LanguageSelector, className)}
      theme={SelectStyles.CLEAR}
      onChange={handleChange}
    >
      {languageOptions.map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </Select>
  );
};

export const LanguageSelectorMemo = memo(LanguageSelector);
