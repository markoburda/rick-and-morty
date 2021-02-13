import { NavLink, useParams } from "react-router-dom";
import "./DetailedCharacter.scss";

import { useEffect, useState } from "react";
import Moment from "moment";
import TextField from "../../components/TextField";
import Tag from "../../components/Tag";
import { getCharacter } from "../../api";

const DetailedCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState("");

  useEffect(() => {
    loadCharacter(id);
  }, [id]);

  const loadCharacter = async (id) => {
    const item = await getCharacter(id);
    setCharacter(item);
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
    error,
  } = character || {};

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
          to="/character"
          className="DetailedCharacter__link"
          activeClassName="DetailedCharacter__link_active"
        >
          #{id} {name}
        </NavLink>
      </div>
      <div className="DetailedCharacter__container">
        <div className="DetailedCharacter__imageContainer">
          <img src={image} alt="" />
        </div>
        <div className="DetailedCharacter__textBox">
          <div className="DetailedCharacter__description">
            <h1 className="DetailedCharacter__title">
              #{id} {name}
            </h1>
            <div className="Description__tag">
              <Tag className="DetailedCharacter__tag">{status}</Tag>
              <Tag className="DetailedCharacter__tag">{gender}</Tag>
            </div>
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
                {/*{created}*/}
                {Moment(created).format("DD-MM-YYYY hh:mm:ss")}
              </TextField>
              <TextField
                label="Last known location:"
                className="DetailedCharacter__textField"
              >
                {location?.name}
              </TextField>

              {/*<TextField label="First seen in:" className="DetailedCharacter__textField">*/}
              {/*    {episodes?.[0]?.name}*/}
              {/*</TextField>*/}
            </div>
            <div className="DetailedCharacter__episodes">
              {/*<TextField label="Episodes:" className="DetailedCharacter__textField">*/}
              {/*    {episodes?.map(renderEpisode)}*/}
              {/*</TextField>*/}
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
