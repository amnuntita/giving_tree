import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

const Filter = (props) => {
  const [dateFilter, setDate] = useState(props.date);

  //internal component

  const zones = ["Phaya Thai", "Siam", "Sam Yan", "Other"];
  let zone_selected = props.zone? props.zone.split(",").map(Number) : Array(zones.length+1).fill(0); 
  // array to keep track of checked-unchecked checkbox (as 0-1)
  
  const dates = [
    "Less than 1 week ago",
    "Less than 1 month ago",
    "Less than 3 months ago",
    "Older",
  ];
  const date_values = [7, 30, 90, false];

  const zone = (choices) => {
    return choices.map((c, index) => {
      return (
        <Form.Check
          type="checkbox"
          id={"checkbox" + index}
          label={c}
          key={"checkbox" + index}
          name="zone"
          value={index+1}
          defaultChecked={zone_selected[index]} 
        />
      );
    });
  };

  const date = (choices) => {
    return choices.map((c, index) => {
    
      return (
        <Form.Check
          type="radio"
          id={"radio" + index}
          label={c}
          key={"radio" + index}
          name="date"
          value={date_values[index]}
           // if the value is equal to the set date filter, the box is checked
          defaultChecked={dateFilter && date_values[index] == dateFilter? true: false} 
        />
      );
    });
  };

  //get current URL
  const query = props.query;
  const cat = props.cat;
  let history = useHistory()

  //functions
  const onCheckboxChange = (event) => {
    zone_selected[event.target.value] = event.target.checked == 1 ? 1 : 0;
  };

  const onApply = (event) => {
    let url = '/result?q='+query+'&c='+cat+"&d="+dateFilter+"&z="+zone_selected.toString()
    history.push(url)
  };

  return (
    <div>
      <div className="filter">
        <h6>Date Posted</h6>
        <Form.Group onChange={(e) => setDate(e.target.value)}>
          {date(dates)}
        </Form.Group>
        <h6>Zone</h6>
        <Form.Group onChange={onCheckboxChange}>{zone(zones)}</Form.Group>
        <Button type="submit" onClick={onApply}> apply filters</Button>
      </div>
    </div>
  );
};

export default Filter;
