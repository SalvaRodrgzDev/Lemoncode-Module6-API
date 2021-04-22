import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Avatar, Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from '@material-ui/core';
import { Character } from './character.vm';
import * as classes from './character.styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import { CharacterCreate } from './api';
import { formValidation } from './character.validation';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
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
      <Formik
        onSubmit={onSave}
        initialValues={character}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent name="name" label="name" />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender">
                <FormControlLabel value="Alive" control={<Radio />} label="Alive" />
                <FormControlLabel value="Dead" control={<Radio />} label="Dead" />
                <FormControlLabel value="unknown" control={<Radio />} label="unknown" />
              </RadioGroup>
            </FormControl>
            <TextFieldComponent name="species" label="species" />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender">
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Genderless" control={<Radio />} label="Genderless" />
                <FormControlLabel value="unknown" control={<Radio />} label="unknown" />
              </RadioGroup>
            </FormControl>
            <TextFieldComponent name="image" label="image" />
            <TextFieldComponent name="bestSentence" label="bestSentence" />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        )}
      </Formik>
      <Button
        className={classes.back}
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </Button>
    </Paper>
  );
};
