import Badge from '@material-ui/core/Badge';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';

const applyStatusColor = status => {
  switch (status) {
    case 'Alive':
      return '#44b700'
    case 'Dead':
      return 'red'
    default:
      return 'orange'
  }
}

const styles = createStyles( {
  badge: {
    backgroundColor: (props: any) => applyStatusColor(props.status),
    color: '#44b700',
    boxShadow: '0 0 0 2px #f0f0f0',
    width: '.6rem',
    height: '.6rem',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export const StyledBadge = withStyles(styles)(Badge);
