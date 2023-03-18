const BASE_URL = "https://api.github.com";

async function searchRepositories(searchQuery, sortCriteria, resultsPerPage, page) {
  const queryString = `q=${searchQuery}&sort=${sortCriteria}&per_page=${resultsPerPage}&page=${page}`;
  const response = await fetch(`${BASE_URL}/search/repositories?${queryString}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return {
    totalResults: data.total_count,
    repositories: data.items.map((item) => ({
      id: item.id,
      name: item.name,
      owner: item.owner.login,
      stars: item.stargazers_count,
      watchers: item.watchers_count,
      forks: item.forks_count,
      description: item.description,
      lastUpdate: item.updated_at,
      url: item.html_url,
    })),
  };
}

async function getRepositoryDetails(owner, repoName) {
  const response = await fetch(`${BASE_URL}/repos/${owner}/${repoName}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return {
    id: data.id,
    owner: data.owner.login,
    name: data.name,
    openIssues: data.open_issues_count,
    defaultBranch: data.default_branch,
    url: data.html_url,
  };
}

export { searchRepositories, getRepositoryDetails };
