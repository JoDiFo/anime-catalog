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
  const [itemsPerPage, setItemsPerPage] = useState(selectOptions[0].value);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number.parseInt(event.target.value));
    // Bad solution but for now it's ok
    handlePageChange({ selected: 0 });
  };

  return (
    <>
      <CardContainer items={currentItems} />
      <div className="content-navigation">
        <select
          name="number-of-titles"
          id="number-of-titles"
          className="content-navigation__items-per-page"
          onChange={handleSelectChange}
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
          onPageChange={handlePageChange}
          onPageActive={(event) => console.log("onPageActive", event)}
          onClick={(event) => console.log("onClick", event)}
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
