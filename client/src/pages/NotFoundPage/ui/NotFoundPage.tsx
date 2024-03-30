import { Link } from "react-router-dom";
import classNames from "classnames";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={classNames(cls.NotFoundPage, className)}>
      <h2>Page not found</h2>
      <Link to={"/"} className={cls.link}>
        TO THE MAIN PAGE
      </Link>
    </div>
  );
};
