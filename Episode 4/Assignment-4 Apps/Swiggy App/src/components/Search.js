import { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchedValue] = useState("");

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={(e) => {
          return setSearchedValue(e.target.value);
        }}
      ></input>
      <button
        className="search-btn"
        onClick={(e) => {
          let filterSearchedResList = props.resList.filter((resItem) => {
            return resItem?.info?.name
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          });
          props.setFilteredResList(filterSearchedResList);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
