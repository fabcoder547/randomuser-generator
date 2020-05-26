import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./Card";
import Axios from "axios";
function App() {
  const [details, setdetails] = useState({});
  const [isClicked, setIsCliked] = useState(false);
  const fetchdetail = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/", {});
    console.log(data); 

    const details = data.results[0];
    setdetails(details);
  };

  useEffect(() => {
    fetchdetail();
  }, [isClicked]);
  return (
    <Container fluid className="p-4  App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details} />
        </Col>
      </Row>

      <button
        className="mainbtn btn-success"
        onClick={() => {
          setIsCliked(isClicked === false ? true : false);
        }}
      >
        Change User
      </button>
    </Container>
  );
}

export default App;
