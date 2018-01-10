import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react'

class FilterForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
};

FilterForm.propTypes = {
};

FilterForm.defaultProps = {
};

export default FilterForm
