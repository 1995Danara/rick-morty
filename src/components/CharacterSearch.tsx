import React, { useState } from 'react';
import SearchInput from './SearchInput';
import CharacterCard from './CharacterCard';

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterSearch = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [deleteCharacterId, setDeleteCharacterId] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const searchCharacters = async (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const data = await response.json();
        if (data.results) {
          setCharacters(data.results.filter((character: Character) => !deleteCharacterId.includes(character.id)));
        }
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    } 
  };

  const handleDelete = (id: number) => {
    setCharacters(prev => prev.filter(character => character.id !== id));
    setDeleteCharacterId(prev => [...prev, id]);
  };
  
  return (
    <div>
      <SearchInput onSearch={searchCharacters} />
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} onDelete={handleDelete} />
        ))}
      </div>
      <div className="party-list">
       
      </div>
    </div>
  );
};

export default CharacterSearch;

