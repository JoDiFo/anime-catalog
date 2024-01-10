import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import { CardContainer } from "../components";

function Content({ items }: any) {
//   const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
//   const [pageCount, setPageCount] = useState(1);
  const itemsPerPage = 1;

  //   useEffect(() => {
  //     calculateValues();
  //   }, []);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  console.log("calculateValues: ", items);
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
        {/* <div className="content-navigation__page-number">
          <img src={leftArrow} alt="left arrow" />
          <span className="active">1</span>
          <span className="not-active">2</span>
          <img src={rightArrow} alt="right arrow" />
        </div> */}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={newPageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page"
          activeClassName="active"
        />
      </div>
    </>
  );
}

export default Content;
