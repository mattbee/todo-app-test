import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';
import { formattedDate, isoDate } from '../helpers/dateHelpers.js';

const INITIAL_STATE = [
  {
    text: 'A todo item to be done',
    id: '123'
  },
  {
    text: 'Another todo not',
    id: '456'
  }
];

const TodoApp = () => {
  const [todos, setTodos] = useState(INITIAL_STATE);
  const [todo, setTodo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    setTodos(todos => {
      return todos.concat({ text: todo, id: new Date().getTime() });
    });
    setTodo('');
  };

  const handleChange = (e) => {
    setTodo(e.currentTarget.value);
  };

  const handleDelete = (id) => {
    setTodos(todos => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <h1>Team To-Do List</h1>
      <time dateTime={isoDate()}>
        {formattedDate({ weekday: 'short', day: 'numeric', year: 'numeric', month: 'long' })}
      </time>

      <section>
        <ul className="todo-list">
          {
            todos.map((todo) => {
              return <TodoItem key={todo.id} text={todo.text} todoId={todo.id} handleDelete={handleDelete} />
            })
          }
        </ul>
        <form onSubmit={onSubmit}>
          <label htmlFor="todo-input">
            Todo text:
            <input type="text" name="todo" id="todo-input" onChange={handleChange} value={todo} />
          </label>
          <button type="submit">Add Todo</button>
        </form>
      </section>
    </div>
  );
};

export default TodoApp;
