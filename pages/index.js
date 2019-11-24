import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';
import Gravatar from '../components/Gravatar';
import { formattedDate, isoDate } from '../helpers/dateHelpers.js';

const INITIAL_STATE = {
  list: []
};

const TodoApp = () => {
  const [todos, setTodos] = useState(INITIAL_STATE);
  const [todo, setTodo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    setTodos(todos => {
      return {
        list: todos.list.concat({ text: todo, id: new Date().getTime() })
      }
    });
    setTodo('');
  };

  const handleChange = (e) => {
    setTodo(e.currentTarget.value);
  };

  const handleDelete = (id) => {
    setTodos(todos => {
      return {
        list: todos.list.filter((todo) => todo.id !== id)
      }
    });
  };

  const handleComplete = (id) => {
    setTodos(todos => {
      const list = todos.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item;
        }
      });

      return {
        list
      }
    })
  };

  return (
    <div className="wrapper">
      <div className="user-area">
        <Gravatar hash="67b8c521fee9aeab7886b4d1dc6947e1" size="50" alt="User profile image." />
        Matt Bee
      </div>
      <div className="todo-container">
        <h1>Team To-Do List</h1>
        <time dateTime={isoDate()}>
          {formattedDate({ weekday: 'short', day: 'numeric', year: 'numeric', month: 'long' })}
        </time>

        <section>
          <ul className="todo-list">
            {
              (todos.list || []).map((todo) => {
                return <TodoItem key={todo.id} text={todo.text} todoId={todo.id} handleDelete={handleDelete} checked={todo.done} handleComplete={handleComplete} />
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
    </div>
  );
};

export default TodoApp;
