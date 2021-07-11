import React, { useContext } from 'react';
import TodoContext from '../utils/TodoContext';



function TypingBar() {

  const todosData = useContext(TodoContext);
  const { todos, setTodos, text, setText } = todosData;
  const onChange = (e) => {
    setText(e.target.value);

  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, text]);
    setText('');
  }
  return (
    <div>
      <form action="" onSubmit={onFormSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type='submit'>Submit</button>

      </form>

    </div>
  )
}

export default TypingBar
