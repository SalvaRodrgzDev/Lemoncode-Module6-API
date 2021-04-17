import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

const url = '/api/character';

interface GetCharacterCollectionResponse {
  characters: CharacterEntityApi[];
}

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = gql`
    query {
      characters {
        id
        name
        status
        species
        image
      }
    }
  `;

  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(
    query
  )
  return characters;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
