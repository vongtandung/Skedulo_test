import "./style.css";
import { useDispatch } from "react-redux";
import { searchUsers, resetSearchResult } from "../../store/user";
import { debounce } from "../../utils";

const MINIMUM_SEARCHABLE_LENGTH = 3;
const SearchTextInput = () => {
  const dispatch = useDispatch();

  const fetchUserDebounce = debounce(
    (searchText) => dispatch(searchUsers(searchText)),
    500
  );

  const handleSearchUser = (e) => {
    const searchText = e?.target?.value || "";

    if (searchText.length >= MINIMUM_SEARCHABLE_LENGTH) {
      fetchUserDebounce(searchText);
    } else {
      dispatch(resetSearchResult());
    }
  };

  return (
    <div className="search-text-input-wrapper">
      <input
        maxLength={100}
        placeholder="Please enter search text"
        onChange={handleSearchUser}
      />
    </div>
  );
};

export default SearchTextInput;
