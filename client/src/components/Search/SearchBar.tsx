import Input from "../UI/Input";
import "./SearchBar.scss";

interface IProps {
  handleChange: (value: string) => void;
}

function SearchBar({ handleChange }: IProps) {
  return (
    <div>
      <div className="search-bar">
        <Input
          type="text"
          placeholder="Search for the anime title"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
