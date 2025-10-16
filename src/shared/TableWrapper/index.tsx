import React from "react";
import "./TableWrapper.scss";
import { ListFilter } from "lucide-react";

interface HeadCell {
  id: string;
  label: string;
}

interface SimpleTableWrapperProps<T> {
  order?: "asc" | "desc";
  orderBy?: keyof T;
  handleRequestSort?: (property: keyof T) => void;
  headCells?: HeadCell[];
  children: React.ReactNode;
}

function SimpleTableWrapper<T>({
  order = "asc",
  orderBy,
  handleRequestSort,
  headCells = [],
  children,
}: SimpleTableWrapperProps<T>) {
  const createSortHandler = (property: keyof T) => () => {
    if (handleRequestSort) handleRequestSort(property);
  };

  return (
    <div className="table-wrapper">
      <table className="simple-table" aria-labelledby="tableTitle">
        {headCells.length > 0 && (
          <thead>
            <tr>
              {headCells.map((cell, index) => {
                const isLast = index === headCells.length - 1;
                const isSorted = orderBy === cell.id;

                return (
                  <th
                    key={String(cell.id)}
                    scope="col"
                    className={`th-cell ${isSorted ? "is-sorted" : ""}`}
                  >
                    {isLast ? (
                      <span className="th-label">{cell.label}</span>
                    ) : (
                      <button
                        type="button"
                        className="th-button"
                        onClick={createSortHandler(cell.id as keyof T)}
                        aria-sort={
                          isSorted
                            ? order === "asc"
                              ? "ascending"
                              : "descending"
                            : "none"
                        }
                      >
                        <span>{cell.label}</span>
                        <ListFilter
                          className="filter-icon"
                          size={12}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default SimpleTableWrapper;
