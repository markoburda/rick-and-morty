import { Link, useHistory } from "react-router-dom";
import {PropTypes } from 'prop-types';
import Tag from "../../components/Tag";
import TextField from "../TextField";
import './Card.scss';

const Card = ({id, name, status, species, type, gender, origin, location, image, episode}) => {
    const history = useHistory();

    const handleClick = () => history.push(`/character/${id}`);

    return <div className="Card">
        <Link to={`/character/${id}`}>
            <div className="Card__imageContainer">
                <img src={image} className="Card__image" alt=""/>
            </div>
        </Link>
        <div className="Card__info">
            <Link to={`/character/${id}`}>
                <header onClick={handleClick} className="Card__name"> {name} </header>
            </Link>
            <div className="Card__tags">
                <Tag className="Card__tag">{gender}</Tag>
                <Tag className="Card__tag">{status}</Tag>
            </div>
            <TextField label="Last known location:" className="Card__textField">
                {location?.name}
            </TextField>
        </div>
    </div>
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Unknown', 'Alive', 'Dead']),
    gender: PropTypes.oneOf(['Male', 'Female', 'Unknown', 'Genderless']),
    location: PropTypes.shape({
        url: PropTypes.string.isRequired,
        fontSize: PropTypes.number.isRequired
    }),
    origin: PropTypes.shape({
        url:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Card;