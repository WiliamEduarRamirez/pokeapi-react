import request from '../api/api';
import { Pokemon, PokemonResult } from '../models/Pokemon';

const pokemonServices = {
  list: (params: URLSearchParams): Promise<PokemonResult> =>
    request.getParams<PokemonResult>('/pokemon', params),
  details: (url: string): Promise<Pokemon> => request.get<Pokemon>(url)
};
export default pokemonServices;
