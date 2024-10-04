import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Character {
  id: string
  name: string
  image: string
}

interface CharactersState {
  searchQuery: string
  selectedCharacters: {
    rick: Character | null
    morty: Character | null
  }
  removedCharacterIds: string[]
}
const initialState: CharactersState = {
  searchQuery: '',
  selectedCharacters: {
    rick: null,
    morty: null,
  },
  removedCharacterIds: [],
}
const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
    selectCharacter(
      state,
      action: PayloadAction<{
        character: Character
        slot: 'rick' | 'morty'
      }>,
    ) {
      const { character, slot } = action.payload
      state.selectedCharacters[slot] = character
    },

    removeCharacter(state, action: PayloadAction<string>) {
      state.removedCharacterIds.push(action.payload)
    },
  },
})

export const { setSearchQuery, selectCharacter, removeCharacter } =
  characterSlice.actions

export default characterSlice.reducer
