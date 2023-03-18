import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from '../components/SearchForm';
import RepositoryList from '../components/RepositoryList';
import Pagination from '../components/Pagination';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('stars');
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [totalResults, setTotalResults] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');

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

    if (searchQuery !== '') {
      searchRepositories();
    }

    return () => {
      setRepositories([]);
      setCurrentPage(1);
    };
  }, [searchQuery, sortCriteria, resultsPerPage, currentPage]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortCriteriaChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const handleResultsPerPageChange = (event) => {
    setResultsPerPage(Number(event.target.value));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
        <SearchForm
          searchQuery={searchQuery}
          sortCriteria={sortCriteria}
          resultsPerPage={resultsPerPage}
          handleSearchQueryChange={handleSearchQueryChange}
          handleSortCriteriaChange={handleSortCriteriaChange}
          handleResultsPerPageChange={handleResultsPerPageChange}
          handleSearch={handleSearch}
        />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {repositories.length > 0 && (
          <div>
            <RepositoryList repositories={repositories} />
            <Pagination
              currentPage={currentPage}
              resultsPerPage={resultsPerPage}
              totalResults={totalResults}
              handlePageChange={handlePageChange}
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
