import React, { useEffect, useState } from "react";
import { Pagination, Table } from "react-bootstrap";

const GitRepo = ({ reposName, pageSize }) => {
  const [activePage, setActivePage] = useState(1);
  const [chunkData, setChunkData] = useState([]);
  let pageCount = Math.ceil(reposName.length / pageSize);

  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage}>
        {number}
      </Pagination.Item>
    );
  }

  const chunk = reposName.reduce((acc, _, i) => (i % pageSize ? acc : [...acc, reposName.slice(i, i + pageSize)]), []);

  useEffect(() => {
    const data = chunk[activePage - 1];
    setChunkData(data);
  }, [activePage]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Created at</th>
            <th>repository url</th>
          </tr>
        </thead>

        {chunkData?.map((repo, index) => {
          return (
            <tbody key={repo.id}>
              <tr>
                <td>{index + 1}</td>
                <td>{repo.name}</td>
                <td>{repo.created_at.slice(0, 10)}</td>
                <td>
                  <a className="repoLink" target="_blank" href={repo.html_url} rel="noreferrer">
                    {repo.html_url}
                  </a>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <Pagination
        onClick={(e) => {
          setActivePage(+e.target.innerText);
        }}
      >
        {items}
      </Pagination>
    </div>
  );
};
export default GitRepo;
