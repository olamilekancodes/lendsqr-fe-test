import "./Pagination.scss";

export const CustomPagination = () => {
  return (
    <div className="pagination-container">
      <p>Showing .. out of ...</p>

      <div>
        <button>Prev</button>
        <button>1</button>
        <button>2</button>
      </div>
    </div>
  );
};
