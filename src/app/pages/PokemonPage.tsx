import React from 'react';
import { Grid } from '@material-ui/core';
import PokemonList from '../../features/pokemon/PokemonList';
import PokemonHeader from '../../features/pokemon/PokemonHeader';
import { Pokemon } from '../models/Pokemon';
import pokemonServices from '../services/pokemon.services';
import PokemonPaginate from '../../features/pokemon/PokemonPaginate';
import { Pagination, PagingParams } from '../models/pagination';
import sleep from '../common/functions/sleep';

const PokemonPage = () => {
  const [initialLoading, setInitialLoading] = React.useState(false);
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [pagination, setPagination] = React.useState<Pagination>({
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 10,
    totalItems: 10
  });

  const [pagingParams, setPagingParams] = React.useState<PagingParams>(new PagingParams());

  const loadPokemons = async (): Promise<void> => {
    setInitialLoading(true);
    const axiosParams = new URLSearchParams();
    axiosParams.append('limit', pagingParams.pageSize.toString());
    axiosParams.append('offset', (pagingParams.pageSize * pagingParams.pageNumber).toString());
    try {
      const response = await pokemonServices.list(axiosParams);
      const tempPagination: Pagination = {
        itemsPerPage: pagingParams.pageSize,
        currentPage: pagingParams.pageNumber,
        totalPages: Math.round(response.count / pagingParams.pageSize),
        totalItems: response.count
      };
      setPagination(tempPagination);
      const pokemonsData = await Promise.all(
        response.results.map(async x => await pokemonServices.details(x.url))
      );
      setPokemons(pokemonsData);
      await sleep(1500);
      setInitialLoading(false);
    } catch (e) {
      setInitialLoading(false);
      throw e;
    }
  };

  React.useEffect(() => {
    loadPokemons().then(() => {});
  }, [pagingParams]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <PokemonHeader />
        </Grid>
        <Grid item xs={7}>
          <PokemonPaginate
            paginate={pagination}
            pagingParams={pagingParams}
            setPagingParams={setPagingParams}
          />
        </Grid>
        <Grid item xs={12}>
          <PokemonList initialLoading={initialLoading} pokemons={pokemons} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PokemonPage;
