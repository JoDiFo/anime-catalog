import { useTranslation } from "react-i18next";
import classNames from "classnames";

import Button from "@/shared/ui/Button";

import cls from "./ErrorFallback.module.scss";

interface ErrorFallbackProps {
  className?: string;
}

export const ErrorFallback = ({ className }: ErrorFallbackProps) => {
  const { t } = useTranslation("translation");

  const onClick = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorFallback, className)}>
      <h2>{t("Oops... Something went wrong")}</h2>
      <Button onClick={onClick}>{t("Reload")}</Button>
    </div>
  );
};
