import React from 'react'
import { motion } from 'framer-motion'
import { CharacterCardProps } from './interface'
import './styles.css'

function CharacterCard({ character, onClick, onDelete }: CharacterCardProps) {
  return (
    <motion.div
      className="character-card"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <img
        className="character-card-image"
        src={character.image}
        alt={character.name}
      />
      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation()
          onDelete(character.id)
        }}
      ></button>
    </motion.div>
  )
}

export default CharacterCard
