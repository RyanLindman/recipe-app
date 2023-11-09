import { useState } from "react";
import "./Searchbar.css";

const Searchbar = (props: { searchQuery: any; setSearchQuery: any }) => {
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="search your favorite recipe"
          value={props.searchQuery}
          onChange={(e) => props.setSearchQuery(e.target.value)}
          name="search"
        />
      </div>
    </>
  );
};

export default Searchbar;
