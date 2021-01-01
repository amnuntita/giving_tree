import React from "react";
import { Form } from "react-bootstrap";

const Filter = () => {
    const type = ['Give','Take','Trade']
    const zone = ['Phaya Thai','Sam Yan','Siam','Other']
    const checkbox = (choices) => {
        return(
        <Form>
            {choices.map((c) => {
                return(<Form.Check type='checkbox' id={c} label={c} />);
            })}
        </Form>
    );
    }

    return(
    <div>
        <div className="filter">
        <h6>Type</h6>
        {checkbox(type)}
        </div>
        <div className="filter">
        <h6>Zone</h6>
        {checkbox(zone)}
        </div>
    </div>
    )
};

export default Filter;
