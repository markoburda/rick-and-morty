import "./Search.scss";
import SearchIcon from "../../assets/icons/search.png";

const Search = ({ className, value, setValue }) => {
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <div className={`Search ${className}`}>
      <img src={SearchIcon} className="Search__icon" />
      <input
        className="Search__input"
        type="text"
        placeholder="search by name"
        value={value}
        onChange={handleChange}
      />
      <button className="Search__button">Find Character</button>
    </div>
  );
};

export default Search;
