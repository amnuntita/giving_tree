import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useLocation,useParams } from "react-router-dom";

import SearchField from "./SearchField.js";
import Filter from "./Filter.js";
import ResultCard from "./ResultCard.js";

import BaseUrl from "../../../BaseUrl.js";

const Result = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("q");
  const cat = new URLSearchParams(search).get("c");
  const date = new URLSearchParams(search).get("d");
  const zone = new URLSearchParams(search).get("z");

  console.log(query,cat,date,zone)

  const [resultList, setResult] = useState(false);


  useEffect(() => {
    async function fetchData() {
      let url = BaseUrl+"/result"+"?q="+query+"&c="+cat
      if (date){ url += "&d="+date}
      if (zone){url += "&z="+zone}
      const res = await fetch(
        url
      );
      console.log(url)
      res.json().then((res) => setResult(res));
    }
    if(query && cat){ fetchData() }
  }, [query,cat,date,zone]);

  //result cards

  const resCard = () => {
    if (resultList && resultList.length > 0) {
      return resultList.map((result) => {
        return (
          <ResultCard
            id={result.post_id}
            title={result.title}
            detail={result.post_detail}
            img={result.img[0]}
            key={result.post_id.toString()}
          />
        );
      });
    } 
    else if(resultList && resultList.length == 0){
      return(<div>no result</div>)
    }
    else {
      return <div>Start searching</div>;
    }
  };


  return (
    <div>
      <Row>
        <Col md={2} className="textbox">
          <h1 className="display-5">Give and Trade</h1>
        </Col>
        <Col md={8} style={{ padding: "30px" }}>
          <SearchField query={query} cat={cat} date={date} zone={zone} />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Filter query={query} cat={cat} date={date} zone={zone} />
        </Col>
        <Container>
          <Row>{resCard()}</Row>
        </Container>
      </Row>
    </div>
  );
};

export default Result;
