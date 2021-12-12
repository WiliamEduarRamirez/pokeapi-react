import React from 'react';
import CustomCircularProgress from '../../app/common/components/CustomCircularProgress';
import { Pokemon } from '../../app/models/Pokemon';
import { Grid } from '@material-ui/core';
import PokemonCard from './PokemonCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh'
  }
});

interface Props {
  pokemons: Pokemon[];
  initialLoading: boolean;
}
const PokemonList = ({ pokemons, initialLoading }: Props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {!initialLoading ? (
        <Grid container spacing={2}>
          {pokemons.map(pokemon => (
            <Grid key={pokemon.id} item xs={12} sm={6} md={4}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container>
          <Grid xs={12} item>
            <div className={classes.center}>
              <CustomCircularProgress />
            </div>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default PokemonList;
