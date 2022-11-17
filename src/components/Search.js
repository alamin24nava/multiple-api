import React, { useState, useEffect } from "react";

export default function Search(props) {
  const [searchResult, setSearchResult] = useState("");
  const handleSearch = (e) => {
    setSearchResult(e.target.value);
  };
  useEffect(() => {
    props.onSearch(searchResult);
  }, [searchResult]);
  return (
    <div className="mb-3">
      <input
        name="searchCountry"
        onChange={handleSearch}
        type="text"
        className="form-control"
        id="searchCountry"
        placeholder="Search Country"
      />
    </div>
  );
}
