import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Pokemon } from '../../app/models/Pokemon';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 180,
    width: 'auto',
    textAlign: 'center',
    display: 'block',
    margin: 'auto'
  }
});

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          className={classes.media}
          image={pokemon.sprites.front_default}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {pokemon.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default PokemonCard;
