import { useState } from "react";
import ReactPaginate from "react-paginate";

import { CardContainer } from "../components";

function Content({ items }: any) {
//   const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
//   const [pageCount, setPageCount] = useState(1);
  const itemsPerPage = 35;

  const endOffset = itemOffset + itemsPerPage;
  const newCurrentItems = items.slice(itemOffset, endOffset);
//   setCurrentItems(newCurrentItems);
  const newPageCount = Math.ceil(items.length / itemsPerPage);
//   setPageCount(newPageCount);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <CardContainer items={newCurrentItems} />
      <div className="content-navigation">
        <select
          name="number-of-titles"
          id="number-of-titles"
          className="content-navigation__items-per-page"
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={newPageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="content-navigation__page-number"
          pageClassName="page"
          activeClassName="active"
          disabledClassName="not-active"
        />
      </div>
    </>
  );
}

export default Content;
