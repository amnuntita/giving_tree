import React from "react";
import { Col, Row, Container} from "react-bootstrap";

import SearchField from "./SearchField.js";
import Filter from "./Filter.js";
import ResultCard from "./ResultCard.js";

const Result = () => {
  const items = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const resCard = () => {
    return items.map((i, index) => {
      return <ResultCard i={index} />;
    });
  };
  return (
    <div>
      <Row>
        <Col md={2} className="textbox">
          <h1 className="display-5">Give and Trade</h1>
        </Col>
        <Col md={8} style={{ padding: "30px" }}>
          <SearchField />
        </Col>
      </Row>
      <Row>
      <Col md={2}>
        <Filter />
      </Col>
      <Container>
        <Row style={{justifyContent:"center"}}>{resCard()}</Row>
      </Container>
      </Row>
    </div>
  );
};

export default Result;
