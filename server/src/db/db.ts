import crypto from 'crypto';
import { createDefaultCharacter, mockCharacters } from './mock-data';
import { Character } from './character.model';

let characters = [...mockCharacters];

export const getCharacterList = async (): Promise<Character[]> => characters;

export const getCharacter = async (id: string): Promise<Character> =>
  characters.find((c) => c.id === id);

export const insertCharacter = async (characterEdit: Character) => {
  const newId = crypto.randomBytes(16).toString('hex');
  characters = [
    ...characters,
    {
      ...createDefaultCharacter(),
      ...characterEdit,
      id: newId,
    },
  ];
  return newId;
};

export const updateCharacter = async (characterEdit: Character): Promise<boolean> => {
  characters = characters.map((c) =>
    c.id === characterEdit.id
      ? {
          ...c,
          ...characterEdit,
        }
      : c
  );

  return true;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characters = characters.filter((c) => c.id !== id);
  return true;
};
