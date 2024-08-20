export interface Character {
  id: string
  name: string
  image: string
}
export interface PartyProps {
  selectedCharacters: {
    rick: Character | null
    morty: Character | null
  }
}
