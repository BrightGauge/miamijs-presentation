import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react'

class FilterForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { Title: '', Year: '', Genre: '' }
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value })
  }

  handleSubmit() {
    const { Title, Year, Genre } = this.state
    this.props.onSearch({ Title, Year, Genre })
  }

  render() {
    const { Title, Year, Genre } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Form.Input
            name='Title'
            label="Title"
            placeholder="Star Wars"
            value={Title}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name='Year'
            label="Year"
            placeholder="2017"
            value={Year}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name='Genre'
            label="Genre"
            placeholder="Horror"
            value={Genre}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button
          fluid
          type='submit'
          className="primary"
        >
          Search
        </Button>
      </Form>
    )
  }
};

FilterForm.propTypes = {
  onSearch: PropTypes.func,
};

FilterForm.defaultProps = {
  onSearch: () => {},
};

export default FilterForm
