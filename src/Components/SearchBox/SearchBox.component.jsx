import React from "react";
import "./SearchBox.styles.css";

const SearchBox = props => (
  <input
    className="search-box"
    type="search"
    placeholder={props.placeholder}
    onChange={props.onSearchChange}
  />
);

export default SearchBox;
