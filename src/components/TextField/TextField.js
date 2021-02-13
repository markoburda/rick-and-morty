import PropTypes from "prop-types";
import "./TextField.scss";

const TextField = ({ className, children, label }) => {
  return (
    <div className={`TextField ${className}`}>
      <div className="TextField__label">{label}</div>
      <div className="TextField__value">{children}</div>
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default TextField;
