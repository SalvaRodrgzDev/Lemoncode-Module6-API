import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams();
  const history = useHistory();

  const handleLoadHotel = async () => {
    const apiHotel = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiHotel));
  };

  React.useEffect(() => {
      handleLoadHotel();
  }, []);

  const handleSave = async (hotel: Character) => {
    const apiHotel = mapCharacterFromVmToApi(hotel);
    const success = await api.saveCharacter(apiHotel);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
