import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import CharacterCard from '../CharacterCard';
import Party from '../Party';
import {Character} from './interface';
import './styles.css';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const Characters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCharacters, setSelectedCharacters] = useState<{
    rick: Character | null;
    morty: Character | null;
  }>({
    rick: null,
    morty: null,
  });

  const handleSelectCharacter = (character: Character, slot: 'rick' | 'morty') => {
    setSelectedCharacters((prev) => ({
      ...prev,
      [slot]: character,
    }));
  };

  const handleDragStart = (character: Character) => {
    return (event: React.DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData('character', JSON.stringify(character));
    };
  };

  const handleDrop = (slot: 'rick' | 'morty') => {
    return (event: React.DragEvent<HTMLDivElement>) => {
      const character = JSON.parse(event.dataTransfer.getData('character')) as Character;
      handleSelectCharacter(character, slot);
    };
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredCharacters = data.characters.results.filter((character: Character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-container">
      <input
        type="text"
        className="search-input"
        placeholder="RICK"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="container">
        {filteredCharacters.map((character: Character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onDelete={(id) => console.log(`Delete character with id ${id}`)}
            onDragStart={handleDragStart(character)}
          />
        ))}
      </div>

      <Party
        selectedCharacters={selectedCharacters}
        onDrop={handleDrop}
      />
    </div>
  );
};

export default Characters;