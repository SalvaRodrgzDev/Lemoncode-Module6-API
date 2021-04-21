import { getCharacterList, Character, getCharacter, deleteCharacter } from '../db';

export const resolvers = {
  Query: {
    characters: async (): Promise<Character[]> => {
      const characters = await getCharacterList();
      return characters;
    },
    character: async (parent, args): Promise<Character> => {
      const character = await getCharacter(args.id);
      return character;
    },
  },
  Mutation: {
    deleteCharacter: async (parent, args): Promise<Boolean> => {
      return await deleteCharacter(args.id);
    }
  }
};
