import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

const Filter = (props) => { 

  //internal component

  /*checkbox*/
  const zones = ["Phaya Thai", "Siam", "Sam Yan", "Other"];
  let zoneFilter = props.zone? props.zone.split(",").map(Number) : Array(zones.length+1).fill(0); 
  // array to keep track of checked-unchecked checkbox (as 0-1)
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
          defaultChecked={zoneFilter[index]} 
        />
      );
    });
  };
  
  /*radio*/
  let dateFilter = props.date;
  const dates = [
    "Less than 1 week ago",
    "Less than 1 month ago",
    "Less than 3 months ago",
    "Older",
  ];
  const date_values = [7, 30, 90, -1];

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
          // if the value is equal to the set date filter (whether from the url or the current page), the box is checked
          defaultChecked={dateFilter && date_values[index] === parseInt(dateFilter)? true: false} 
        />
      );
    });
  };

  //get current URL
  const query = props.query;
  const cat = props.cat;
  let history = useHistory()

  //onChange functions 
  const onCheckboxChange = (event) => {
    zoneFilter[event.target.value] = event.target.checked == 1 ? 1 : 0;
    redirect()
  };

  async function onRadioChange(event){
    dateFilter = event.target.value
    redirect()
  }

  const redirect = () => {
    let url = '/result?q='+query+'&c='+cat
    //apply date Filter only if dateFilter is not -1 (older = doesn't need to apply)
    if(dateFilter > 0){
      console.log(dateFilter)
      url += "&d="+dateFilter
    }
    //apply zone filter only if at least 1 box is checked
    if(zoneFilter.includes(1)){
      url += "&z="+zoneFilter.toString()
    }
    history.push(url)
  }


  return (
    <div>
      <div className="filter">
        <h6>Date Posted</h6>
        <Form.Group onChange={onRadioChange}>
          {date(dates)}
        </Form.Group>
        <h6>Zone</h6>
        <Form.Group onChange={onCheckboxChange}>{zone(zones)}</Form.Group>
      </div>
    </div>
  );
};

export default Filter;
