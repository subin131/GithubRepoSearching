import React from 'react';

const RepositoryListItem = ({ repo }) => {
  const { owner, name, stargazers_count, watchers_count, forks_count, description, updated_at } = repo;

  return (
    <li>
      <h3>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {owner.login} / {name}
        </a>
      </h3>
      <ul>
        <li>
          <i className="bi bi-star"></i> {stargazers_count}
        </li>
        <li>
          <i className="bi bi-eye"></i> {watchers_count}
        </li>
        <li>
          <i className="bi bi-code-branch"></i> {forks_count}
        </li>
        <li>{description}</li>
        <li>Updated on {new Date(updated_at).toLocaleDateString()}</li>
      </ul>
    </li>
  );
};

export default RepositoryListItem;
