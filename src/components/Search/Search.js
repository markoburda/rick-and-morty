import "./Search.scss";

// TODO: prettify code - objects should have offsets inside { className, value, setValue }
// eslint can help with fixing it
const Search = ( {className, value, setValue} ) => {

    const handleChange = ({target: {value}}) => {
        setValue(value);
    };

    return <div className={`Search ${className}`}>
        <input
            className="Search__input"
            type="text"
            placeholder="search by name"
            value={value}
            onChange={handleChange}
        />
        <button className="Search__button">Find Character</button>
    </div>
};

export default Search;