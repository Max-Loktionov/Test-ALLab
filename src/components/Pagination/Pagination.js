import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function Pagination({ onPageChange, pageCount }) {
  return (
    <ReactPaginate
      nextLabel={
        <ChevronRightIcon className="chevronIcon mx-8 " aria-hidden="true" />
      }
      onPageChange={onPageChange}
      pageRangeDisplayed={4}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel={
        <ChevronLeftIcon className="chevronIcon mx-8" aria-hidden="true" />
      }
      pageClassName="page-item"
      pageLinkClassName="page-link "
      previousClassName="page-item"
      previousLinkClassName="page-link "
      nextClassName="page-item"
      nextLinkClassName="page-link "
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link "
      containerClassName="pagination  "
      activeClassName="active "
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
