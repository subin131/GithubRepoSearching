import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchForm = ({ onSubmit }) => {
  // console.log("SearchForm: ", {onSubmit});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("stars");
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
    
  const handleSortCriteriaChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const handleResultsPerPageChange = (e) => {
    setResultsPerPage(e.target.value);
  };

  const handleSearch = (e) => {
    

    
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <div className="flex-grow-1 me-2">
        <label htmlFor="searchQuery" className="visually-hidden">
          Search query:
        </label>
        <input
          type="text"
          id="searchQuery"
          className="form-control"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Enter search query"
          aria-label="Search query"
        />
      </div>
      <div className="me-2">
        <label htmlFor="sortCriteria" className="visually-hidden">
          Sort by:
        </label>
        <select
          id="sortCriteria"
          className="form-select"
          value={sortCriteria}
          onChange={handleSortCriteriaChange}
          aria-label="Sort by"
        >
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="updated">Last updated</option>
        </select>
      </div>
      <div className="me-2">
        <label htmlFor="resultsPerPage" className="visually-hidden">
          Results per page:
        </label>
        <select
          id="resultsPerPage"
          className="form-select"
          value={resultsPerPage}
          onChange={handleResultsPerPageChange}
          aria-label="Results per page"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
