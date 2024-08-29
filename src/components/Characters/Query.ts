import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query GetCharacters($search: String!) {
    characters(filter: { name: $search }) {
      results {
        id
        name
        image
      }
    }
  }
`
