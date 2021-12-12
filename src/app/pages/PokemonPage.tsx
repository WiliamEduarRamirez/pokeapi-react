import React from 'react';
import { Grid } from '@material-ui/core';
import PokemonList from '../../features/pokemon/PokemonList';
import PokemonHeader from '../../features/pokemon/PokemonHeader';

const PokemonPage = () => {
  return (
    <React.Fragment>
      <Grid>
        <Grid item>
          <PokemonHeader />
        </Grid>
        <Grid item>
          <PokemonList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PokemonPage;
