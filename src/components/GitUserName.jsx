import React from "react";

const GitUserName = ({ userName }) => (
  <div>
    {userName?.map((e) => (
      <div key={e.id}>
        <div className="userName">
          <div className="imgContainer">
            <img className="img" src={e.avatar_url} alt="" />
          </div>
          <div className="dataContainer">
            <div>Name:</div>
            <div>Location:</div>
            <div>Public_repos: {e.public_repos}</div>
            <div>Created at: {e.created_at.slice(0, 10)}</div>
            <div className="nav">
              <a className="githubLink" target="_blank" href={`https://github.com/${e.login}`} rel="noreferrer">
                Go to user GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default GitUserName;
