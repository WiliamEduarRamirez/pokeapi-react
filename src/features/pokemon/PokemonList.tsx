import React from 'react';
import pokemonServices from '../../app/services/pokemon.services';
import CustomCircularProgress from '../../app/common/components/CustomCircularProgress';
import sleep from '../../app/common/functions/sleep';

const PokemonList = () => {
  const [initialLoading, setInitialLoading] = React.useState(false);
  React.useEffect(() => {
    const axiosParams = new URLSearchParams();
    axiosParams.append('limit', '10');
    axiosParams.append('offset', '0');
    setInitialLoading(true);
    pokemonServices
      .list(axiosParams)
      .then(async res => {
        await sleep(1200);
        console.log(res);
      })
      .finally(() => {
        setInitialLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      {!initialLoading ? <h1>Desde Pokemon list</h1> : <CustomCircularProgress />}
    </React.Fragment>
  );
};

export default PokemonList;
