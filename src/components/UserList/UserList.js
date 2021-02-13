import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCharacters } from "../../api";
import Card from "../Card";
import Pagination from "../Pagination";
import "./UserList.scss";

const UserList = ({ status, gender, name }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [characters, setCharacters] = useState();
  const [pages, setPages] = useState(0);

  const loadCharacters = async (page = 0, params) => {
    const items = await getCharacters({ page: page + 1, ...params });
    setCharacters(items?.results);
    setPages(items?.info?.pages || 0);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [name, status, gender]);

  useEffect(() => {
    loadCharacters(currentPage, {
      ...(name && { name }),
      ...(gender && { gender }),
      ...(status && { status }),
    });
  }, [name, gender, status, currentPage]);

  const renderCharacter = (character) => (
    <Card key={character.id} {...character} />
  );

  return characters ? (
    <div className="UserList">
      <div className="UserList__users">{characters?.map(renderCharacter)}</div>
      <Pagination
        pages={pages}
        setCurPage={setCurrentPage}
        curPage={currentPage}
      />
    </div>
  ) : (
    <h1>No characters found.</h1>
  );
};

UserList.propTypes = {
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserList;
