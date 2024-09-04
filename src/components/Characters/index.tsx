import React, { useState, useEffect, useCallback } from 'react'
import { useLazyQuery } from '@apollo/client'
import debounce from 'lodash/debounce'
import { AnimatePresence } from 'framer-motion'

import CharacterCard from '../CharacterCard'
import Party from '../Party'
import { Character } from './interface'
import './styles.css'
import { GET_CHARACTERS } from './Query'

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])
  const [selectedCharacters, setSelectedCharacters] = useState<{
    rick: Character | null
    morty: Character | null
  }>({
    rick: null,
    morty: null,
  })
  const [removedCharacterIds, setRemovedCharacterIds] = useState<string[]>([])

  const [loadCharacters, { loading, data }] = useLazyQuery(GET_CHARACTERS, {
    fetchPolicy: 'network-only',
  })

  const debouncedSearch = debounce((query: string) => {
    if (query.length > 2) {
      loadCharacters({ variables: { search: query } })
    } else {
      setFilteredCharacters([])
    }
  }, 300)

  useEffect(() => {
    debouncedSearch(searchQuery)
    return () => {
      debouncedSearch.cancel()
    }
  }, [searchQuery, debouncedSearch])

  useEffect(() => {
    if (!loading && data) {
      setFilteredCharacters((prev) => {
        const updatedCharacters = data.characters.results.filter(
          (newCharacter: Character) =>
            !prev.find(
              (prevCharacter) => prevCharacter.id === newCharacter.id,
            ) && !removedCharacterIds.includes(newCharacter.id),
        )
        return [...prev, ...updatedCharacters]
      })
    }
  }, [data, loading, removedCharacterIds])

  const handleSelectCharacter = useCallback(
    (character: Character, slot: 'rick' | 'morty') => {
      setSelectedCharacters((prev) => ({
        ...prev,
        [slot]: character,
      }))
    },
    [],
  )

  const handleClickCharacter = useCallback(
    (character: Character) => {
      if (character.name.includes('Rick')) {
        handleSelectCharacter(character, 'rick')
      } else if (character.name.includes('Morty')) {
        handleSelectCharacter(character, 'morty')
      }
    },
    [handleSelectCharacter],
  )

  const filteredCharactersList = filteredCharacters.filter(
    (character: Character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = useCallback((id: string) => {
    setRemovedCharacterIds((prev) => [...prev, id])
    setFilteredCharacters((prev) =>
      prev.filter((character) => character.id !== id),
    )
  }, [])

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
        <AnimatePresence>
          {filteredCharactersList.map((character: Character) => (
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
