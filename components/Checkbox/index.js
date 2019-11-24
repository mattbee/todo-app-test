import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ checked, onChange, name }) => (
  <input type="checkbox" name={name} onChange={onChange} checked={checked} />
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
