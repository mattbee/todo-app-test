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
    id: '123'
  }
];

const TodoApp = () => {
  const [todos, setTodos] = useState(INITIAL_STATE);

  return (
    <div>
      <h1>Team To-Do List</h1>
      <time dateTime={isoDate()}>
        {formattedDate({ weekday: 'short', day: 'numeric', year: 'numeric', month: 'long' })}
      </time>

      <section>
        <ul>
          {
            todos.map((todo) => {
              return <TodoItem key={todo.id} text={todo.text} />
            })
          }
        </ul>
      </section>
    </div>
  );
};

export default TodoApp;
