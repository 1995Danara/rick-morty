import { Character } from '../Characters/interface'

export interface CharacterCardProps {
  character: Character
  onDelete: (id: string) => void
  onClick: () => void
}
