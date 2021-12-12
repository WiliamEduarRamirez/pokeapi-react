import request from '../api/api';
import { PokemonResult } from '../models/Pokemon';

const pokemonServices = {
  list: (params: URLSearchParams): Promise<PokemonResult> =>
    request.getParams<PokemonResult>('/pokemon', params)
};
export default pokemonServices;
