import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Poster.css'

import { Image } from 'semantic-ui-react'

const Poster = ({ src }) => {
  return <Image className="bg movie poster" src={src} size="tiny" />
}

Poster.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Poster
