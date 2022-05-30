import React from "react";
import { getPagesArray } from "../../../Utils/pages";

//получаем количество страниц, номер текущей страници и функцию которая изменяет номер страницы
const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  //надо использовать useMemo
  return (
    <div className="page__wrapper" style={{ marginTop: "30px" }}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page == p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
