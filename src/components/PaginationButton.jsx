export default function PaginationButton({ page, active = false }) {
    return (
      <button
        className={`pagination-button ${active ? "active" : ""}`}
        type="button"
      >
        {page}
      </button>
    );
  }