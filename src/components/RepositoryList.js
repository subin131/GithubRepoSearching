import React from 'react';
import RepositoryListItem from './RepositoryListItem';

const RepositoryList = ({ repositories }) => {
  return (
    <ul>
      {repositories.map((repo) => (
        <RepositoryListItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
};

export default RepositoryList;
