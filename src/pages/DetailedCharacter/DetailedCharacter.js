import {NavLink, useParams } from "react-router-dom";

import TextField from "../../components/TextField";
import Tag from "../../components/Tag";
import {useEffect, useState} from "react";
import {getCharacter} from "../../api";

import './DetailedCharacter.scss';

const DetailedCharacter = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState("");

    useEffect(() => {
        loadCharacter(id);
    }, [id]);

    const loadCharacter = async (id) => {
        const item = await getCharacter(id);
        if (item.error) {
            console.log(item.error);
        } else {
            console.log(item);
            setCharacter(item);
        }};

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

    // const renderEpisode = ({id, name, episode }) => (
    //     <div key={id} className="DetailedUser__episode">
    //         <span className="DetailedUser__number">{episode}:</span> {name}
    //     </div>
    // );

    return character ? (
        <div className="DetailedUser">
            <div className="DetailedUser__links">
                <NavLink exact to="/" className="DetailedUser__link" activeClassName="DetailedUser__link_active">
                    Home
                </NavLink>
                <NavLink exact to="/character" className="DetailedUser__link" activeClassName="DetailedUser__link_active">
                    #{id} {name}
                </NavLink>
            </div>
            <div className="DetailedUser__imageContainer">
                <img src={image} alt=""/>
            </div>
            <div className="DetailedUser__description">
                <h1>#{id} {name}</h1>
                <div className="Description__tag">
                    <Tag/>
                    <Tag/>
                </div>
                <div className="DetailedUser__mainInfo">
                    <TextField label="Species:" className="DetailedUser__textField">
                        {species}
                    </TextField>
                    <TextField label="Origin:" className="DetailedUser__textField">
                        {origin?.name}
                    </TextField>
                    <TextField label="Birthday:" className="DetailedUser__textField">
                        {created}
                    </TextField>
                    <TextField label="Last known location:" className="DetailedUser__textField">
                        {location?.name}
                    </TextField>

                    {/*<TextField label="First seen in:" className="DetailedUser__textField">*/}
                    {/*    {episodes?.[0]?.name}*/}
                    {/*</TextField>*/}
                </div>
                <div className="DetailedUser__episodes">
                    {/*<TextField label="Episodes:" className="DetailedUser__textField">*/}
                    {/*    {episodes?.map(renderEpisode)}*/}
                    {/*</TextField>*/}
                </div>
        </div>
    </div>
    ) : <div className="DetailedUser"> Character not found. We're sorry :(</div>
};

export default DetailedCharacter;