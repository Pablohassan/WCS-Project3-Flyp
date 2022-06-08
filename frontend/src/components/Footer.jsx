import "../css/Footer.css";
import "../css/SearchBar.css";

export default function Footer({ onToggleSearch, onclickTrue, onclickFalse }) {
  return (
    <div className="footerContainer">
      <button
        onClick={onclickFalse}
        type="button"
        className="footerButton bg-red-500"
      >
        Caroussel
      </button>
      <button
        onClick={onclickTrue}
        type="button"
        className="footerButton bg-red-500"
      >
        Liste
      </button>
      <button id="search-toggle" type="button" onClick={onToggleSearch}>
        <svg
          className="searchIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
      </button>
    </div>
  );
}
