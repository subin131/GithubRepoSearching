import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineFork } from "react-icons/ai";
import { AiOutlineBranches } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { GoIssueOpened } from "react-icons/go";

const RepositoryListItem = ({ repo }) => {
  const cardBody={
      display: "flex",
      flexDirection: " row",
      alignItems: "center",
      marginRight: "10px",
      justifyContent: "center",
    }
  
  const {
    owner,
    name,
    stargazers_count,
    watchers_count,
    forks_count,
    description,
    updated_at,
    open_issues_count,
    default_branch,
  } = repo;

  return (
    <ul class="list-group repository-details">
      <li style={{ marginTop: "10px" }} class="list-group-item">
        <div class="d-flex align-items-center">
          <span class="me-3"></span>
          <div>
            <h4
              style={{
                display: "flex",
                flexDirection: " row",
                alignItems: "center",
              }}
              class="m-0"
            >
              <BsPersonCircle
                style={cardBody}
              />
              Full Name:
              <a href={repo.owner.html_url} target="_blank" rel="noreferrer">
                {owner.login}
              </a>
            </h4>
          </div>
        </div>
        <ul class="list-group mt-3">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <h6 class="m-0">
             <RiGitRepositoryCommitsFill /> Repository Name:
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </h6>
          </li>
          <li
          
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <AiFillStar style={{ marginRight: "10px" }} />
              Stargazers Count:
            </span>
            <span class="badge bg-primary rounded-pill">
              {stargazers_count}
            </span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span><AiFillEye style={{ marginRight: "10px" }} /> Watcher Count:</span>
            <span class="badge bg-primary rounded-pill">{watchers_count}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span><AiOutlineFork style={{ marginRight: "10px" }} /> Forks Count:</span>
            <span class="badge bg-primary rounded-pill">{forks_count}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span><GoIssueOpened style={{ marginRight: "10px" }}/> Number of Open Issues:</span>
            <span class="badge bg-primary rounded-pill">
              {open_issues_count}
            </span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span><AiOutlineBranches style={{ marginRight: "10px" }}/> Default Branch:</span>
            <span class="badge bg-primary rounded-pill">{default_branch}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span><MdDescription style={{ marginRight: "10px" }}/> Description:</span>
            <span>{description}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span><BiTimeFive style={{ marginRight: "10px" }}/> Updated on:</span>
            <span>{new Date(updated_at).toLocaleDateString()}</span>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default RepositoryListItem;
