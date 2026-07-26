export default function Button({ children, disabled = false }) {
    return (
      <button className="like-button" type="button" disabled={disabled}>
        ♥ {children}
      </button>
    );
  }
  