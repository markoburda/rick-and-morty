import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import UserList from "../../components/UserList";
import Hero from "../../components/Hero";
import { getCharacters } from "../../api";
import "./Home.scss";

function Home() {
  const [name, setName] = useState("");
  const [queryName, setQueryName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const delayedQuery = useCallback(_.debounce(setQueryName, 1000), [
    setQueryName,
  ]);

  const onNameChange = (value) => {
    setName(value);
    delayedQuery(value);
  };

  return (
    <div className="Home">
      <Hero
        characterName={name}
        setName={onNameChange}
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
      />
      <UserList name={queryName} status={status} gender={gender} />
    </div>
  );
}

export default Home;
