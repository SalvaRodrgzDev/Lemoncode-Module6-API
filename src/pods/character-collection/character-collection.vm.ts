export interface CharacterEntityVm {
  id: string,
  name: string,
  status: 'Alive' | 'Dead' | 'unknown',
  species: string,
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown',
  image: string,
  bestSentence: string
}
