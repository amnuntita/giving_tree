import React from 'react';
import {Form,Button} from 'react-bootstrap';

const SearchField = () => {
    return(<Form inline>
        <Form.Label className="mr-2">Keyword</Form.Label>
        <Form.Control
          className="mr-sm-4 col-md-4"
          id="inlineFormInputName2"
          placeholder="search for..."
        />
        <Form.Label className="mr-2">Date posted</Form.Label>
        <Form.Control as="select" className="mr-sm-4 mb-2 mb-sm-0" id="inlineFormCustomSelect" custom>
            <option value="0">This week</option>
            <option value="1">Less than one months</option>
            <option value="2">Less than 3 months</option>
            <option value="3">Older...</option>
        </Form.Control>
        <Button type="submit">
          Search
        </Button>
      </Form>);
}

export default SearchField;