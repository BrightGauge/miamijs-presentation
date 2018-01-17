import PropTypes from 'prop-types';

export const MovieShape = PropTypes.shape({
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Poster: PropTypes.string,
})
