import React, { useContext } from 'react';
import TodoContext from '../utils/TodoContext';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
  const todosData = useContext(TodoContext);
  const { todos } = todosData;

  // single to do

  return (
    <div>
      <div className="todo__list">
        {todos?.map((todo) => (
          <Todo todo={todo} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default Todos;