import greenHeart from "../icons/greenheart.svg";

export default function Button({
  children,
  disabled = false,
  icon = greenHeart,
  className = "",
}) {
  return (
    <button
      className={`like-button ${className}`}
      type="button"
      disabled={disabled}
    >
      {icon && <img className="button-icon" src={icon} alt="" />}
      {children}
    </button>
  );
}  