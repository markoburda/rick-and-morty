import { useState } from "react";
import PropTypes from "prop-types";
import UserList from "../../components/UserList";
import Hero from "../../components/Hero";
import "./Home.scss";

function Home({ name, queryName, onNameChange }) {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="Home">
      <Hero
        name={name}
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

Home.propTypes = {
  name: PropTypes.string.isRequired,
  queryName: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default Home;
