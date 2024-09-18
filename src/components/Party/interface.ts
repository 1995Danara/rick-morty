import { Character } from '../../types/types'

export interface PartyProps {
  selectedCharacters: {
    rick: Character | null
    morty: Character | null
  }
}
