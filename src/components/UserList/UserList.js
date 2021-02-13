import { useState, useEffect } from "react";
import Card from "../Card";
import Pagination from "../Pagination";
import { getCharacters } from "../../api";
import "./UserList.scss";

const UserList = ({ status, gender, name }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [characters, setCharacters] = useState();
  const [pages, setPages] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const loadCharacters = async (page = 0, params) => {
    setIsLoading(true);
    const items = await getCharacters({ page: page + 1, ...params });
    setIsLoading(false);
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

  return (
    <div className="UserList">
      <div className="UserList__users">{characters?.map(renderCharacter)}</div>
      <Pagination
        pages={pages}
        setCurPage={setCurrentPage}
        curPage={currentPage}
      />
    </div>
  );
};

export default UserList;
