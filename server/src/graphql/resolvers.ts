import { getCharacterList, Character } from '../db';

export const resolvers = {
  Query: {
    characters: async (): Promise<Character[]> => {
      const characters = await getCharacterList();
      return characters;
    },
  },
};
