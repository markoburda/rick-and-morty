import { NavLink, useParams } from "react-router-dom";
import "./DetailedCharacter.scss";

import { useEffect, useState } from "react";
import Moment from "moment";
import TextField from "../../components/TextField";
import Tag from "../../components/Tag";
import { getCharacter, getEpisodes } from "../../api";

const DetailedCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState("");
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    loadCharacter(id);
  }, [id]);

  const loadCharacter = async (id) => {
    const [character, episodes] = await Promise.all([
      getCharacter(id),
      getEpisodes(),
    ]);
    setCharacter(character);
    setEpisodes(episodes.results);
  };

  const renderEpisode = (episode) => {
    return (
      <div key={episode?.id} className="DetailedCharacter__episode">
        {episode?.episode}: {episode?.name}
      </div>
    );
  };

  const {
    name,
    status,
    species,
    gender,
    origin,
    location,
    image,
    created,
  } = character || {
    name: "...",
    status: "...",
    species: "...",
    gender: "...",
    origin: "...",
    location: "...",
    image: "...",
    created: "...",
  };

  return character ? (
    <div className="DetailedCharacter">
      <div className="DetailedCharacter__links">
        <NavLink
          exact
          to="/"
          className="DetailedCharacter__link"
          activeClassName="DetailedCharacter__link_active"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to={`/character/${id}`}
          className="DetailedCharacter__link"
          activeClassName="DetailedCharacter__link_active"
        >
          | #{id} {name}
        </NavLink>
      </div>
      <div className="DetailedCharacter__container">
        <div className="DetailedCharacter__imageContainer">
          <img src={image} alt="" className="DetailedCharacter__image" />
        </div>
        <div className="DetailedCharacter__textBox">
          <div className="DetailedCharacter__description">
            <div className="DetailedCharacter__title">
              #{id} {name}
            </div>
            <div className="Description__tag">
              <Tag className="DetailedCharacter__tag">{status}</Tag>
              <Tag className="DetailedCharacter__tag">{gender}</Tag>
            </div>
            <div className="DetailedCharacter__infoContainer">
              <div className="DetailedCharacter__mainInfo">
                <TextField
                  label="Species:"
                  className="DetailedCharacter__textField"
                >
                  {species}
                </TextField>
                <TextField
                  label="Origin:"
                  className="DetailedCharacter__textField"
                >
                  {origin?.name}
                </TextField>
                <TextField
                  label="Birthday:"
                  className="DetailedCharacter__textField"
                >
                  {Moment(created).format("DD-MM-YYYY hh:mm:ss")}
                </TextField>
                <TextField
                  label="Last known location:"
                  className="DetailedCharacter__textField"
                >
                  {location?.name}
                </TextField>
                <TextField
                  label="First seen in:"
                  className="DetailedCharacter__textField"
                >
                  {episodes[0]?.name}
                </TextField>
              </div>
              <div className="DetailedCharacter__episodes">
                <TextField
                  label="Episodes:"
                  className="DetailedCharacter__textField"
                >
                  {episodes?.map(renderEpisode)}
                </TextField>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="DetailedCharacter"> Character not found.</div>
  );
};

export default DetailedCharacter;
