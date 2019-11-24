import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ text }) => (
  <li>{text}</li>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default TodoItem;
