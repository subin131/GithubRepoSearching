import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const { owner, repo } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        const data = await response.json();
        setRepoDetails(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchRepoDetails();
  }, [owner, repo]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {repoDetails && (
        <div>
          <h1>
            <a href={repoDetails.html_url} target="_blank" rel="noreferrer">
              {repoDetails.full_name}
            </a>
          </h1>
          <p>Open issues: {repoDetails.open_issues_count}</p>
          <p>Default branch: {repoDetails.default_branch}</p>
          <p>
            <Link to="/">Back to search</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
