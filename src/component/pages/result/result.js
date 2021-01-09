import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import SearchField from "./SearchField.js";
import Filter from "./Filter.js";
import ResultCard from "./ResultCard.js";

import BaseUrl from "../../../BaseUrl.js";

const Result = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("q");
  const cat = new URLSearchParams(search).get("c");

  const [resultList, setResult] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        BaseUrl + "/result" + "?q=" + query + "&c=" + cat
      );
      res.json().then((res) => setResult(res));
    }
    fetchData();
  }, [query, cat]);

  //result cards

  const resCard = () => {
    if (resultList) {
      return resultList.map((result) => {
        return (
          <ResultCard
            id={result.post_id}
            title={result.title}
            detail={result.post_detail}
            img={result.img}
            key={result.post_id.toString()}
          />
        );
      });
    } else {
      return <div>Add some beautiful picture for no result/empty search</div>;
    }
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
          <Row>{resCard()}</Row>
        </Container>
      </Row>
    </div>
  );
};

export default Result;
