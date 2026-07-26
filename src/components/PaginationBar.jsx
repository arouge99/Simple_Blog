export default function PaginationBar({
    currentPage,
    totalPages,
    onPageChange,
  }) {
    return (
      <nav className="pagination-bar" aria-label="Article pagination">
        <button
          type="button"
          className="pagination-button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          ←
        </button>
  
        <span className="pagination-info">
          Page <strong>{currentPage}</strong> of {totalPages}
        </span>
  
        <button
          type="button"
          className="pagination-button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          →
        </button>
      </nav>
    );
  }