import React from "react";
import { Form,Button } from "react-bootstrap";
import {useLocation} from "react-router-dom";

const Filter = (props) => {
    const zone = ['Phaya Thai','Sam Yan','Siam','Other']
    const date_posted = ['Less than 1 week ago','Less than 1 month ago','Less than 3 months ago','Older']
    const select = (choices,type) => {
        return(
            choices.map((c) => {
                return(<Form.Check type={type} id={c} label={c} key={c} name={type}/>);
            })
    );
    }

    let location = useLocation();
    

    return(
    <div>
        <div className="filter">
        <Form>
        <h6>Zone</h6>
        {select(zone,'checkbox')}
        <h6>Date Posted</h6>
        {select(date_posted,'radio')}
        <Button>apply filters</Button>
        </Form>
        </div>
    </div>
    )
};

export default Filter;
