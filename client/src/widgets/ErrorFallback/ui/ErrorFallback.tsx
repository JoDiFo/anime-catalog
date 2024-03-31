import classNames from "classnames";
import Button from "@/shared/ui/Button";
import cls from "./ErrorFallback.module.scss";

interface ErrorFallbackProps {
  className?: string;
}

export const ErrorFallback = ({ className }: ErrorFallbackProps) => {
  const onClick = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorFallback, className)}>
      <h2>Oops... Something went wrong</h2>
      <Button onClick={onClick}>Reload</Button>
    </div>
  );
};
