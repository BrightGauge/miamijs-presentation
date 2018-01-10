import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react'

class FilterForm extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = this.initialState
  }

  get initialState() {
    return { title: '', year: '' }
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value })
  }

  handleSubmit() {
    const { title, year } = this.state
    if (title.length > 1) {
      this.props.onSearch({ s: title, y: year })
    }
  }

  render() {
    const { title, year } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Form.Input
            name='title'
            label="Title"
            placeholder="Star Wars"
            value={title}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name='year'
            label="Year"
            placeholder="2017"
            value={year}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button
          type='submit'
          loading={this.props.isSearching}
        >
          Search
        </Button>
      </Form>
    )
  }
};

FilterForm.propTypes = {
  onSearch: PropTypes.func,
  isSearching: PropTypes.bool,
};

FilterForm.defaultProps = {
  onSearch: () => {},
  isSearching: false,
};

export default FilterForm
