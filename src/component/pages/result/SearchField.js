import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const SearchField = () => {
  const [searchValue, setSearch] = useState({
    keyword: "",
    cat: "s",
  });


  let history = useHistory();
  const submit = () => {
    history.push("/result/?q=" + searchValue.keyword + "&c=" + searchValue.cat);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.keyword === "") {
      alert("Please fill in keyword");
    } else if (searchValue.cat === "s") {
      alert("Please select post type (give, take or trade)");
    } else {
      submit();
    }
  };

  return (
    <Form inline>
      <Form.Label className="mr-2">Keyword</Form.Label>
      <Form.Control
        id="keyword"
        className="mr-sm-4 col-md-4"
        placeholder="search for..."
        value={searchValue.keyword}
        onChange={(e) =>
          setSearch((values) => ({ ...values, keyword: e.target.value }))
        }
      />
      <Form.Label className="mr-2">Post type</Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-4 mb-2 mb-sm-0"
        id="cat"
        value={searchValue.cat}
        onChange={(e) =>
          setSearch((values) => ({ ...values, cat: e.target.value }))
        }
        custom
      >
        <option value="s">select...</option>
        <option value="g">Give</option>
        <option value="t">Take</option>
        <option value="tr">Trade</option>
      </Form.Control>
      <Link onClick={handleSubmit} to={"/dummies"}>
        <Button type="submit">Search</Button>
      </Link>
    </Form>
  );
};

export default SearchField;
