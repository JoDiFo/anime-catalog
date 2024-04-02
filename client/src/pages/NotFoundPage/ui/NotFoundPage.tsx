import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation("translation");

  return (
    <div className={classNames(cls.NotFoundPage, className)}>
      <h2>{t("Page not found")}</h2>
      <Link to={"/"} className={cls.link}>
        {t("TO THE MAIN PAGE")}
      </Link>
    </div>
  );
};
