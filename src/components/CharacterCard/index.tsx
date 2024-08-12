import React from 'react';

import {Character} from './interface';
import './styles.css';

interface CharacterCardProps {
    character:Character;
    onDelete: (id: string) => void;
    onDragStart: (event: React.DragEvent<HTMLDivElement>) => void; 
};

const CharacterCard = ({character,onDragStart, onDelete}:CharacterCardProps) => {
    return (
        <div className ='character-card'  draggable onDragStart={onDragStart} >
            <img src = {character.image} alt = {character.name} />
            <button className="delete-button" onClick={() => onDelete(character.id)}>X</button>
        </div>
    );
};

export default CharacterCard;