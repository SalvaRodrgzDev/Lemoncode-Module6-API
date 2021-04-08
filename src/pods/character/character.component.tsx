import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Avatar, Button, Paper, Typography } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

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
      <Formik
        onSubmit={onSave}
        initialValues={character}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent name="bestSentence" label="Best sentence" />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>

  );
};
