import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'

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
      <Button
        onClick={(e) => {
          e.stopPropagation()
          onDelete(character.id)
        }}
      >
        X
      </Button>
    </motion.div>
  )
}
export default CharacterCard
