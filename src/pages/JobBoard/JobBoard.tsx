import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import Board from "../../components/Board";
import PropagateLoader from "react-spinners/PropagateLoader";
import { JobIFace } from "../../helpers/jobIFace";

interface Iboard {
  items: JobIFace[];
}

interface IEvent extends React.MouseEvent<HTMLElement> {
  selected: number;
}

const AMOUNT_OF_ITEMS = 3; //limit of data in page itemsPerPage

function JobBoard(prop: Iboard) {
  const { items } = prop;

  const [itemsPerPage] = useState<number>(AMOUNT_OF_ITEMS);
  const [currentItems, setCurrentItems] = useState<JobIFace[] | null>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: IEvent): void => {
    setIsLoading(true);
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setIsLoading(false);
  };

  return (
    <div id="container" className="pagination-container bg-grey-mobCard p-4">
      {currentItems && <Board job={currentItems} />}
      <Pagination onPageChange={handlePageClick} pageCount={pageCount} />
      {isLoading && <PropagateLoader color="#41d61f" />}
    </div>
  );
}
export default JobBoard;
