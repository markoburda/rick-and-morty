import _ from "lodash";
import { PropTypes } from "prop-types";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import "./Pagination.scss";

const Pagination = ({ pages, setCurPage, curPage }) => {
  const getDisplayedPages = () => {
    if (curPage - 2 <= 0) return _.range(-1, Math.min(5, pages));
    if (curPage + 2 >= pages) return _.range(Math.max(pages - 5, 0), pages);
    const minPage = Math.max(curPage - 2);
    const maxPage = Math.min(minPage + 4, pages);
    return _.range(minPage, maxPage + 1);
  };

  const handleClick = (page) => () => {
    setCurPage(page);
  };

  const renderPage = (page, isClickable = true) => {
    if (!isClickable) return;
    const isActive = page === curPage;
    return (
      <div
        onClick={handleClick(page)}
        className={`Pagination__page ${
          isActive ? "Pagination__page_active" : ""
        }`}
        key={page}
      >
        {page + 1}
      </div>
    );
  };

  const renderArrow = (isNext = false) => {
    const nextPage = isNext ? curPage + 1 : curPage - 1;
    const isArrowClickable =
      (!isNext && nextPage >= 0) || (isNext && nextPage < pages);
    return (
      <div
        className="Pagination__page"
        onClick={handleClick(nextPage, isArrowClickable)}
      >
        <Arrow
          className={`Pagination__arrow ${
            isNext ? "Pagination__arrow_next" : ""
          } ${isArrowClickable ? "Pagination__arrow_active" : ""}`}
        />
      </div>
    );
  };

  return (
    <div className="Pagination">
      {renderArrow()}
      {_.map(getDisplayedPages(), renderPage)}
      {renderArrow(true)}
    </div>
  );
};

Pagination.PropTypes = {
  pages: PropTypes.string.isRequired,
  setCurPage: PropTypes.func.isRequired,
  curPage: PropTypes.number.isRequired,
};

export default Pagination;
