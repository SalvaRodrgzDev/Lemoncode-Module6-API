import React from 'react';
import { Avatar, Button, Paper, Typography } from '@material-ui/core';
import { Character } from './character.vm';
import * as classes from './character.styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const history = useHistory();

  return (
    <Paper
      className={classes.paper}
      elevation={3}
    >
      <Avatar
        className={classes.avatar}
        alt="character avatar"
        src={character.image}
      />
      <Typography variant="h4">{character.name}</Typography>
      <Typography>{character.status}</Typography>
      <Typography>{character.species}</Typography>
      <Button
        className={classes.back}
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </Button>
    </Paper>
  );
};
