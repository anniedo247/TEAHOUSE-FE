import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({onSubmit,onChange,searchInput}) => {
  

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={searchInput}
          placeholder=" SEARCH"
          className="search-bar-input"
        />
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          color="black"
          style={{
            position: "absolute",
            left: "200px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
