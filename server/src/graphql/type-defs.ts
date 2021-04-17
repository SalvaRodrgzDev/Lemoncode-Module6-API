import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Character {
    id: ID!
    name: String
    status: Status
    species: String
    type: String
    gender: Gender
    origin: NameUrl
    location: NameUrl
    image: String
    episode: [String]
    url: String
    created: String
    bestSentence: String
  }

  type Query {
    characters: [Character!]!
  }

  enum Status {
    Alive
    Dead
    unknown
  }

  enum Gender {
    Male
    Female
    Genderless
    unknown
  }

  type NameUrl {
    name: String
    url: String
  }
`;
