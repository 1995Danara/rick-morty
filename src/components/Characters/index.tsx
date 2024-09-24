import React, { useState, useEffect, useCallback } from 'react'
import { useLazyQuery } from '@apollo/client'
import { AnimatePresence } from 'framer-motion'

import CharacterCard from '../CharacterCard'
import Party from '../Party'
import SearchInput from '../SearhInput'
import { Character } from '../../types/types'
import './styles.css'
import { GET_CHARACTERS } from './Query'

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCharacters, setSelectedCharacters] = useState<{
    rick: Character | null
    morty: Character | null
  }>({
    rick: null,
    morty: null,
  })
  const [removedCharacterIds, setRemovedCharacterIds] = useState<string[]>([])

  const [loadCharacters, { data }] = useLazyQuery(GET_CHARACTERS, {
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    if (searchQuery) {
      loadCharacters({ variables: { search: searchQuery } })
    }
  }, [searchQuery])

  const selectCharacter = useCallback(
    (character: Character, slot: 'rick' | 'morty') => {
      setSelectedCharacters((prev) => ({
        ...prev,
        [slot]: character,
      }))
    },
    [],
  )

  const handleClickCharacter = (character: Character) => {
    if (character.name.includes('Rick')) {
      selectCharacter(character, 'rick')
    } else if (character.name.includes('Morty')) {
      selectCharacter(character, 'morty')
    }
  }
  const handleDelete = (id: string) => {
    setRemovedCharacterIds((prev) => [...prev, id])
  }

  return (
    <div className="main-container">
      <SearchInput onSearch={setSearchQuery} />
      <div className="container">
        <AnimatePresence>
          {data?.characters?.results
            .filter(
              (character: Character) =>
                !removedCharacterIds.includes(character.id),
            )
            .map((character: Character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onDelete={handleDelete}
                onClick={() => handleClickCharacter(character)}
              />
            ))}
        </AnimatePresence>
      </div>
      <Party selectedCharacters={selectedCharacters} />
    </div>
  )
}

export default Characters
