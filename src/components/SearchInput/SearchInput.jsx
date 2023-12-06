import "./SearchInput.css";
import searchIcon from "../../assets/search-icon.png";

export default function SearchInput() {
  return (
    <form id="search-form" role="search">
      <img src={searchIcon} />
      <input
        aria-label="Search contacts"
        placeholder="поиск..."
        type="search"
        name="q"
      />
    </form>
  );
}
