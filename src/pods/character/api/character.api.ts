import { Character } from './character.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface GetCharacterResponse {
  character: Character;
}

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    const query = gql`
    mutation($character: CharacterInput!) {
      updateCharacter(character: $character)
    }
  `;
    await graphQLClient.request<Boolean>(query, {
      character: character
    });
  } else {
    const query = gql`
    mutation($character: CharacterInput!) {
      insertCharacter(character: $character)
    }
    `;
    await graphQLClient.request<Boolean>(query, {
      character: character
    });
  }
  return true;
};


export const getCharacter = async (id: string): Promise<Character> => {
  const query = gql`
    query {
      character(id:"${id}") {
        id
        name
        status
        species
        image
        gender
        bestSentence
      }
    }
  `;

  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  )
  return character;
};
