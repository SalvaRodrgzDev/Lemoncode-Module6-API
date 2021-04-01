export interface Character {
  id: string,
  name: string,
  status: 'Alive' | 'Dead' | 'unknown',
  species: string,
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown',
  image: string,
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: 'unknown',
  species: '',
  gender: 'unknown',
  image: '',
});
