export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
export class PagingParams {
  pageNumber;
  pageSize;

  constructor(pageNumber = 0, pageSize = 10) {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
  }
}
