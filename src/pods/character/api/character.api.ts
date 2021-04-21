import { Character } from './character.api-model';
import Axios from 'axios';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

const characterListUrl = '/api/character';

interface GetCharacterResponse {
  character: Character;
}

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.patch<Character>(`${characterListUrl}/${character.id}`, character);
  } else {
    await Axios.post<Character>(characterListUrl, character);
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
