import React from 'react';

import { Character} from './interface';
import './styles.css';
  
export interface CharacterCardProps {
    character: Character;
    onDelete: (id: string) => void;
    onClick: () => void;  
}

const CharacterCard = ({ character, onDelete, onClick }: CharacterCardProps) => {
    return (
     <div className='character-card' onClick={onClick}>
      <img 
        src={character.image} 
        alt={character.name} 
        className='character-card-image' 
      />
      <button
        className="delete-button" 
        onClick={(e) => {
          e.stopPropagation(); 
          onDelete(character.id);
        }}
      >
      </button>
     </div>
    );
};

export default CharacterCard;





