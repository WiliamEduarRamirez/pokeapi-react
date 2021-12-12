import React from 'react';
import { Pagination } from '@material-ui/lab';

import { Pagination as PaginationModel, PagingParams } from '../../app/models/pagination';

interface Props {
  paginate: PaginationModel;
  pagingParams: PagingParams;
  setPagingParams: (pagingParams: PagingParams) => void;
}
const PokemonPaginate = ({ paginate, setPagingParams, pagingParams }: Props) => {
  const onChangePaginate = (event: React.ChangeEvent<unknown>, page: number) => {
    setPagingParams({ ...pagingParams, pageNumber: page - 1 });
  };
  return (
    <React.Fragment>
      <div style={{ margin: '25px 0 25px 0' }}>
        <Pagination
          onChange={(event, page) => onChangePaginate(event, page)}
          variant={'outlined'}
          count={paginate.totalPages}
          color='primary'
        />
      </div>
    </React.Fragment>
  );
};

export default PokemonPaginate;
