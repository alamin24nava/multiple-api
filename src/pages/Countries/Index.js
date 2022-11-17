import React, {useState} from "react";
import Search from "../../components/Search";

import Layout from "../../layout/Index";
import Countries from "./Countries";

export default function Index() {
  const [searchResult, setSearchResult] = useState("");
  const handleSearch = (searchValue)=>{
    setSearchResult(searchValue)
  }
    
  return (
    <>
        <Layout />
      <div className="main-content">
        <div className="d-flex justify-content-between">
          <div className="section-box">
            <h4 className="title pb-0">All Countries Data</h4>
          </div>
          <Search onSearch={handleSearch} />
        </div>
        <Countries searchResult = {searchResult} />
      </div>
    </>
  );
}
