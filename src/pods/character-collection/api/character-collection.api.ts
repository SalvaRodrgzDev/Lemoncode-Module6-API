import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get<{ results: CharacterEntityApi[]}>(url);
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
