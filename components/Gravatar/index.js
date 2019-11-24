import React from 'react';
import PropTypes from 'prop-types';

const Gravatar = ({ hash, size, alt }) => (
  <img
    src={`http://gravatar.com/avatar/${hash}?s=${size}`}
    alt={alt}
    width={size}
    height={size}
  />
);

Gravatar.propTypes = {
  hash: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Gravatar;
