import classNames from "classnames";
import cls from "./LanguageSelector.module.scss";
import Select from "@/shared/ui/Select";
import { changeLanguage } from "i18next";

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector = ({ className }: LanguageSelectorProps) => {
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
