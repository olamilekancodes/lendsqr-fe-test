import { ChevronLeft, ChevronRight } from "lucide-react";

import "./Pagination.scss";

interface CustomPaginationProps {
  current_page: number;
  total_pages: number;
  items_per_page: number;
  setItemPerPage: (num: number) => void;
  setCurrentPage: (page: number) => void;
}

export const CustomPagination = ({
  current_page,
  total_pages,
  items_per_page,
  setItemPerPage,
  setCurrentPage,
}: CustomPaginationProps) => {
  const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (total_pages <= 5) {
      for (let i = 1; i <= total_pages; i++) pages.push(i);
    } else {
      if (current_page <= 3) {
        pages.push(1, 2, 3, "...", total_pages - 1, total_pages);
      } else if (current_page >= total_pages - 2) {
        pages.push(1, 2, "...", total_pages - 2, total_pages - 1, total_pages);
      } else {
        pages.push(
          1,
          "...",
          current_page - 1,
          current_page,
          current_page + 1,
          "...",
          total_pages
        );
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span>Showing</span>
        <select
          className="items-dropdown"
          value={items_per_page}
          onChange={handleItemChange}
        >
          {[10, 15, 20].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <span>results</span>
      </div>

      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage(Math.max(current_page - 1, 1))}
          className="nav-btn"
          disabled={current_page === 1}
        >
          <ChevronLeft size={14} />
        </button>

        {pages.map((page, idx) =>
          typeof page === "number" ? (
            <span
              key={idx}
              className={`page-btn ${current_page === page ? "active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </span>
          ) : (
            <span key={idx} className="ellipsis">
              {page}
            </span>
          )
        )}

        <button
          onClick={() =>
            setCurrentPage(Math.min(current_page + 1, total_pages))
          }
          disabled={current_page === total_pages}
          className="nav-btn"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};
