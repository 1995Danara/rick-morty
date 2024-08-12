import React from 'react';

import {Character} from './interface';
import './styles.css';

interface PartyProps {
  selectedCharacters: {
    rick: Character | null;
    morty: Character | null;
  };
  onDrop: (slot: 'rick' | 'morty') => (event: React.DragEvent<HTMLDivElement>) => void;
}

const Party = ({ selectedCharacters, onDrop }:PartyProps) => {
  return (
    <div className="party-container">
      <h2>PARTY</h2>
      <div className="slot-container">
        <div
          className="slot"
          onDrop={onDrop('rick')}
          onDragOver={(e) => e.preventDefault()}
        >
          {selectedCharacters.rick ? (
            <img src={selectedCharacters.rick.image} alt="Rick" />
          ) : (
            <p className="slot-text">RICK</p>
          )}
        </div>
        <div
          className="slot"
          onDrop={onDrop('morty')}
          onDragOver={(e) => e.preventDefault()}
        >
          {selectedCharacters.morty ? (
            <img src={selectedCharacters.morty.image} alt="Morty" />
          ) : (
            <p className="slot-text">MORTY</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Party;
