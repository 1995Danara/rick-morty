import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredCharacters = data.characters.results.filter((character: any) =>
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
        {filteredCharacters.map((character: any) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
