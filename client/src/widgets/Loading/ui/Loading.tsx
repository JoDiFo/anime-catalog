import { Loader } from "@/shared/ui/Loader/Loader";
import cls from "./Loading.module.scss";

export function Loading() {
  return (
    <div className={cls.Loading}>
      <Loader />
    </div>
  );
}
