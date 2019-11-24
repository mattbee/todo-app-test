import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const TodoItem = ({ text, todoId, handleDelete }) => (
  <li>
    {text}
    <Button onClick={() => handleDelete(todoId)}>
      Delete <span className="visually-hidden">{text}</span>
    </Button>
  </li>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  todoId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default TodoItem;
