import PropTypes from "prop-types";
import Search from "../Search";
import "./Header.scss";

const Header = ({ value, setValue }) => {
  return (
    <div className="Header">
      <Search className="Header__search" value={value} setValue={setValue} />
    </div>
  );
};

Header.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Header;
