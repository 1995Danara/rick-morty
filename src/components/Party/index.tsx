import React from 'react'

import { PartyProps } from './interface'
import './styles.css'

const Party = ({ selectedCharacters }: PartyProps) => {
  return (
    <div className="party-container">
      <h2 className="party-title">PARTY</h2>
      <div className="slot-container">
        <div className="slot">
          {selectedCharacters.rick ? (
            <img src={selectedCharacters.rick.image} alt="Rick" />
          ) : (
            <span className="slot-text">RICK</span>
          )}
        </div>
        <div className="slot">
          {selectedCharacters.morty ? (
            <img src={selectedCharacters.morty.image} alt="Morty" />
          ) : (
            <span className="slot-text">MORTY</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Party
