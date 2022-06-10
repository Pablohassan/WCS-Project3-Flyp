import "../css/SearchBar.css";
import sendAnswerButton from "../assets/images/send.png";

export default function SearchBar() {
  return (
    <div className="searchBarBox" id="search-content">
      <div className="searchBarContainer">
        <form action="">
          <input
            id="searchfield"
            placeholder="Search..."
            className="searchBarInput"
          />
          <button
            type="button"
            className="absolute top-0 right-0 mt-3 mr-3 flex flex-shrink-0 focus:outline-none block text-red-300 hover:text-amber-600 w-6 h-6 opacity-30"
          >
            <img
              src={sendAnswerButton}
              alt="button in the input to send the answer"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
