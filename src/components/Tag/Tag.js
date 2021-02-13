import "./Tag.scss";

const Tag = ({ className, children }) => {
  return <div className={`Tag ${className}`}>{children}</div>;
};

export default Tag;
