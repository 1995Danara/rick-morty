import { Character } from '../Characters/interface'
export interface PartyProps {
  selectedCharacters: {
    rick: Character | null
    morty: Character | null
  }
}
