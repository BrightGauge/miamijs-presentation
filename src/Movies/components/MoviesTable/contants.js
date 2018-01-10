import PropTypes from 'prop-types';

export const moviePropsShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date),
  rating: PropTypes.number,
  imageUrl: PropTypes.string,
})
