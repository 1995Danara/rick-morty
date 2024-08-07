import React from 'react';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterCardProps {
  character: Character;
  onDelete: (id: number) => void;
}

const CharacterCard = ({ character, onDelete }: CharacterCardProps) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <button className="delete-button" onClick={() => onDelete(character.id)}>X</button>
    </div>
  );
};

export default CharacterCard;








