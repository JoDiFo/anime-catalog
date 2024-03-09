import { memo, useState } from "react";
import ReactPaginate from "react-paginate";

import { CardContainer } from "..";
import { IAnimeList } from "../../types";
import Select from "../UI/Select";
import "./ContentNavigation.scss";

interface SelectedItem {
  selected: number;
}

function Content({ items }: IAnimeList) {
  const selectOptions = [
    { id: 1, value: 35, text: "35" },
    { id: 2, value: 70, text: "70" },
    { id: 3, value: 120, text: "120" },
    { id: 4, value: 200, text: "200" },
  ];

  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(selectOptions[0].value);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (event: SelectedItem) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number.parseInt(event.target.value));
    const newOffset = (0 * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setCurrentPage(0);
  };

  return (
    <>
      {items.length !== 0 ? (
        <CardContainer items={currentItems} />
      ) : (
        <div className="not-found-text">No anime found</div>
      )}
      <div className="content-navigation">
        <Select
          name="number-of-titles"
          id="number-of-titles"
          onChange={handleSelectChange}
        >
          {selectOptions.map((item) => (
            <option key={item.id} value={item.value}>
              {item.text}
            </option>
          ))}
        </Select>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageChange}
          forcePage={currentPage}
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

export default memo(Content);
