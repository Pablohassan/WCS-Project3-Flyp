import "../css/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBarBox" id="search-content">
      <div className="searchBarContainer">
        <input
          id="searchfield"
          placeholder="Search..."
          className="searchBarInput"
        />
      </div>
    </div>
  );
}
