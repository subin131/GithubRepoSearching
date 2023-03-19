import React from 'react';
import RepositoryListItem from './RepositoryListItem';

const RepositoryList = ({ data }) => {
  return (
    <ul>
      {data.map((repo) => (
        <RepositoryListItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
};

export default RepositoryList;
