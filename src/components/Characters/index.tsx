import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import CharacterCard from '../CharacterCard';
import Party from '../Party';
import { Character } from './interface';
import './styles.css';
import { GET_CHARACTERS } from './charactersQuery';

const Characters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<{
    rick: Character | null;
    morty: Character | null;
  }>({
    rick: null,
    morty: null,
  });

  useEffect(() => {
    if (data) {
      setFilteredCharacters(data.characters.results);
    }
  }, [data]);

  const handleSelectCharacter = (character: Character, slot: 'rick' | 'morty') => {
    setSelectedCharacters((prev) => ({
      ...prev,
      [slot]: character,
    }));
  };

  const handleClickCharacter = (character: Character) => {
    if (character.name.includes('Rick')) {
      handleSelectCharacter(character, 'rick');
    } else if (character.name.includes('Morty')) {
      handleSelectCharacter(character, 'morty');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredCharactersList = filteredCharacters.filter((character: Character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setFilteredCharacters((prev) => prev.filter(character => character.id !== id));
  };

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
        {filteredCharactersList.map((character: Character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onDelete={handleDelete}
            onClick={() => handleClickCharacter(character)} 
          />
        ))}
      </div>

      <Party selectedCharacters={selectedCharacters} />
    </div>
  );
};

export default Characters;
