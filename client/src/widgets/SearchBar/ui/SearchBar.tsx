import Input from "@/shared/ui/Input";
import cls from "./SearchBar.module.scss";

interface SearchBarProps {
  handleChange: (value: string) => void;
}

export function SearchBar({ handleChange }: SearchBarProps) {
  return (
    <div>
      <div className={cls.SearchBar}>
        <Input
          type="text"
          placeholder="Search for the anime"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}
