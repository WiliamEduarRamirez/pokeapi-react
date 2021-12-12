import React from 'react';
import pokemonServices from '../../app/services/pokemon.services';
import CustomCircularProgress from '../../app/common/components/CustomCircularProgress';
import sleep from '../../app/common/functions/sleep';
import { Pokemon } from '../../app/models/Pokemon';
import { Grid } from '@material-ui/core';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [initialLoading, setInitialLoading] = React.useState(false);
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  React.useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    setInitialLoading(true);
    const axiosParams = new URLSearchParams();
    axiosParams.append('limit', '10');
    axiosParams.append('offset', '0');
    try {
      const response = await pokemonServices.list(axiosParams);
      await sleep(5000);
      const pokemonsData = await Promise.all(
        response.results.map(async x => await pokemonServices.details(x.url))
      );
      setPokemons(pokemonsData);
    } catch (e) {
      console.log(e);
    } finally {
      setInitialLoading(false);
    }
  };

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
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh'
              }}
            >
              <CustomCircularProgress />
            </div>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default PokemonList;
