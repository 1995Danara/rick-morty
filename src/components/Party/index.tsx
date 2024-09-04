import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PartyProps } from './interface'
import './styles.css'

const Party = ({ selectedCharacters }: PartyProps) => {
  return (
    <div className="party-container">
      <h2 className="party-title">PARTY</h2>
      <div className="slot-container">
        <div className="slot">
          <AnimatePresence>
            {selectedCharacters.rick ? (
              <motion.img
                key={selectedCharacters.rick.id}
                src={selectedCharacters.rick.image}
                alt="Rick"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="character-image"
              />
            ) : (
              <span className="slot-text">RICK</span>
            )}
          </AnimatePresence>
        </div>
        <div className="slot">
          <AnimatePresence>
            {selectedCharacters.morty ? (
              <motion.img
                key={selectedCharacters.morty.id}
                src={selectedCharacters.morty.image}
                alt="Morty"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="character-image"
              />
            ) : (
              <span className="slot-text">MORTY</span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Party
