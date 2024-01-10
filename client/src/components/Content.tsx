import { useState } from "react";
import ReactPaginate from "react-paginate";

import { CardContainer } from "../components";

function Content({ items }: any) {
  const selectOptions = [
    { value: 35, text: "35" },
    { value: 70, text: "70" },
    { value: 120, text: "120" },
    { value: 200, text: "200" },
  ];

  const [itemOffset, setItemOffset] = useState(0);
  const [selectedOption, setSelectedOption] = useState(selectOptions[0].value);
//   const itemsPerPage = 35;
  const endOffset = itemOffset + selectedOption;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / selectedOption);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * selectedOption) % items.length;
    setItemOffset(newOffset);
  };

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <CardContainer items={currentItems} />
      <div className="content-navigation">
        <select
          name="number-of-titles"
          id="number-of-titles"
          className="content-navigation__items-per-page"
          onChange={(event) => handleSelectChange(event)}
        >
          {selectOptions.map((item) => (
            <option key={`${item.value}_${item.text}`} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
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
