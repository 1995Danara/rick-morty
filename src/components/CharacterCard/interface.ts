interface Character {
  id: string
  name: string
  image: string
}
export interface CharacterCardProps {
  character: Character
  onDelete: (id: string) => void
  onClick: () => void
}
