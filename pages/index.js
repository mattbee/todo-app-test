import React from 'react';
import { formattedDate, isoDate } from '../helpers/dateHelpers.js';

const TodoApp = () => (
  <div>
    <h1>Team To-Do List</h1>
    <time dateTime={isoDate()}>
      {formattedDate({ weekday: 'short', day: 'numeric', year: 'numeric', month: 'long'})}
    </time>
  </div>
);

export default TodoApp;
