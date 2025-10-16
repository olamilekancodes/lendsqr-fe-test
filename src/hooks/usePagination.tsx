import { useState } from "react";

interface PaginationProps<T> {
  data: T[];
  order_control: keyof T;
}

function usePagination<T>({ data, order_control }: PaginationProps<T>) {
  const [current_page, setCurrentPage] = useState(1);
  const [items_per_page, setItemPerPage] = useState(10);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof T>(order_control);

  const index_of_last_item = current_page * items_per_page;
  const index_of_first_item = index_of_last_item - items_per_page;

  const sortedData = [...data].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const current_data = sortedData.slice(
    index_of_first_item,
    index_of_last_item
  );

  const total_pages = Math.ceil(data.length / items_per_page);

  const handleRequestSort = (property: keyof T) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return {
    order,
    orderBy,
    current_data,
    total_pages,
    current_page,
    setCurrentPage,
    handleRequestSort,
    setItemPerPage,
    items_per_page,
  };
}

export default usePagination;
