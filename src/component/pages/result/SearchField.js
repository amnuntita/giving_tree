import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const SearchField = (props) => {
  const [keyword,setKeyword] = useState(props.query?? "")
  const [cat,setCat] = useState(props.cat?? 0)


  const handleSubmit = (event) => {
    event.preventDefault();
    if (keyword === "") {
      alert("Please fill in keyword");
    } else if (cat === "s") {
      alert("Please select post type (give, take or trade)");
    } else {
      submit();
    }
  };

  let history = useHistory();
  const submit = () => {
    console.log(keyword,cat)
    let url = "/result/?q=" + keyword + "&c=" + cat
    if(props.date){ url += "&d="+props.date}
    if(props.zone){ url += "&z="+props.zone}
    history.push(url);
  };


  return (
    <Form inline>
      <Form.Label className="mr-2">Keyword</Form.Label>
      <Form.Control
        id="keyword"
        className="mr-sm-4 col-md-4"
        placeholder="search for..."
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
      />
      <Form.Label className="mr-2">Post type</Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-4 mb-2 mb-sm-0"
        id="cat"
        value={cat}
        onChange={(e) =>
          setCat(e.target.value)
        }
        custom
      >
        <option value="s">select...</option>
        <option value="g">Give</option>
        <option value="t">Take</option>
        <option value="tr">Trade</option>
      </Form.Control>
      <Button onClick={handleSubmit} type="submit">Search</Button>
    </Form>
  );
};

export default SearchField;
