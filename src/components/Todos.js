import React, { useContext, useState } from 'react';
import TodoContext from '../utils/TodoContext';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
    const todosData = useContext(TodoContext);
    const { todos, setTodos } = todosData;
  const [text, setText] = useState('');
  // single to do
  



  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
      e.preventDefault();
      setTodos([...todos, text]);
  }


  return (
    <div>
      <h1>Todos</h1>
      <form action="">
        <input type="text" value={text} onChange={onChange} />
        <button type='button' onClick={onSubmit}>Submit</button>
       
      </form>

      <div className="todo__list">
        {todos.map((todo) => (
          <Todo todo={todo} key={uuidv4()} />
        ))}
        </div>
    </div>
  );
};

export default Todos;