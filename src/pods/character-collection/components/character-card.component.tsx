import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import DeleteIcon from '@material-ui/icons/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import { StyledBadge, useStyles } from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
            status={character.status}
          >
            <Avatar
              className={classes.large}
              alt="character avatar"
              src={character.image}
            >
              {character.species}
            </Avatar>
          </StyledBadge>
        }
        title={character.name}
        subheader={character.gender}
      />
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <LaunchIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
