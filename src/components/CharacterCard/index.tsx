import React from 'react'

import { CharacterCardProps } from './interface'
import './styles.css'

const CharacterCard = ({
  character,
  onDelete,
  onClick,
}: CharacterCardProps) => {
  return (
    <div className="character-card" onClick={onClick}>
      <img
        src={character.image}
        alt={character.name}
        className="character-card-image"
      />
      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation()
          onDelete(character.id)
        }}
      ></button>
    </div>
  )
}

export default CharacterCard
