import "./Select.scss";
import { useState } from "react";
import { PropTypes } from "prop-types";

const Select = ({ value, handleSelect, options, label }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleIsOpened = () => setIsOpened(!isOpened);
  const onOptionClick = (option) => {
    handleSelect(option.value);
    setIsOpened(false);
  };
  const renderOption = (option) => (
    <li
      key={option.value}
      value={option.value}
      className="Select__option"
      onClick={() => onOptionClick(option)}
    >
      {" "}
      {option.label}{" "}
    </li>
  );
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="Select">
      <div className="Select__selectedOption" onClick={handleIsOpened}>
        <span className="Select__label">{label}</span>
        <span className="Select__value">{selectedOption.label}</span>
        {isOpened && (
          <ul className="Select__options">{options.map(renderOption)}</ul>
        )}
      </div>
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
