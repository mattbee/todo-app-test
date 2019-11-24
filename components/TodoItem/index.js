import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Checkbox from '../Checkbox';

const TodoItem = ({ text, todoId, checked, handleDelete, handleComplete }) => (
  <li>
    <label>
      <Checkbox checked={checked} name="done" onChange={() => handleComplete(todoId)} />
      {text}
    </label>
    <Button onClick={() => handleDelete(todoId)}>
      Delete <span className="visually-hidden">{text}</span>
    </Button>
  </li>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  todoId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  checked: PropTypes.bool,
  handleDelete: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired
};

export default TodoItem;
