import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RepositoryList from "../components/RepositoryList";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PaginationList from "../components/Pagination";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("stars");
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [totalResults, setTotalResults] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = repositories.slice(indexOfFirstRecord, indexOfLastRecord);
  //number of pages
  const nPages = Math.ceil(repositories.length / recordsPerPage)
  useEffect(() => {
    setLoading(true);
    setError("");

    const searchRepositories = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${searchQuery}&sort=${sortCriteria}&per_page=${resultsPerPage}&page=${currentPage}`
        );
        const data = await response.json();
        if (response.ok) {
          setRepositories(data.items);
          setTotalResults(data.total_count);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery !== "") {
      searchRepositories();
    }

    return () => {
      setRepositories([]);
      setCurrentPage(1);
    };
  }, [searchQuery, sortCriteria, resultsPerPage, currentPage]);
  console.log("repositories", repositories);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortCriteriaChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const handleResultsPerPageChange = (event) => {
    setResultsPerPage(Number(event.target.value));
  };


  const handleSearch = (event) => {
    event.preventDefault();
    setCurrentPage(1);
  };


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Search for repositories on GitHub</h1>
            {/* //form start */}
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
            {/* //search form end */}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {repositories.length > 0 && (
              <div>
                <RepositoryList data={currentRecords}  />
                <PaginationList
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchPage;
