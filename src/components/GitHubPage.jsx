import { useState } from "react";
import { Button, Form, InputGroup, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../redux/reducer";
import { userNameThunk, reposNameThunk } from "../redux/action";
import "./gitHubPage.css";
import GitRepo from "./GitRepo";
import GitUserName from "./GitUserName";

const GitHubPage = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const gitUsername = useSelector(userData);
  let { userName, reposName, loading, pageSize } = gitUsername;

  let userNameFunc = (value) => {
    dispatch(userNameThunk(value));
    dispatch(reposNameThunk(value));
  };

  return (
    <div className="github">
      <div className="container">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={() => text && userNameFunc(text)}>
            Search
          </Button>
        </InputGroup>
        <div className="paragraf">
          {loading ? (
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
          ) : (
            <h1>Please Search User by git Username</h1>
          )}
        </div>
        <div className="userContainer">
          <Container>
            <Row>
              {!!userName.length && (
                <Col sm={4}>
                  <GitUserName userName={userName} />
                </Col>
              )}

              {!!reposName.length && (
                <Col sm={8}>
                  <GitRepo reposName={reposName} pageSize={pageSize} />
                </Col>
              )}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default GitHubPage;
