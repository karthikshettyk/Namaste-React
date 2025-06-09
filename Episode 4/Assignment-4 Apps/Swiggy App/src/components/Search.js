import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchedValue] = useState("");


  return (
    <div className="search-bar">
      <input className="search-input"
        type="text"
        value={searchValue}
        onChange={(e) => {
          return setSearchedValue(e.target.value);
        }}
      ></input>
      <button className="search-btn" onClick={(e)=>{
            console.log("button clicked");        
      }}>Search</button>
    </div>
  );
};

export default Search;
