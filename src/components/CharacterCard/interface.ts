import { Character } from '../../types/types'

export interface CharacterCardProps {
  character: Character
  onDelete: (id: string) => void
  onClick: () => void
}
