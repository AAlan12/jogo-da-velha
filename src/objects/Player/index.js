import React from "react";
import './styles.css';
import playerX from '../../img/player-x.png';
import playerO from '../../img/player-circle.png';


const Player = (props) => {
    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;
    return (
        <button className="player">
            <img src={players[props.player]} alt={`Jogador ${props.player.toUpperCase()}`} />
        </button>
    )
};

export default Player;