
import './App.css';

import React, { useState } from 'react'
import Todos from './components/Todos'
import TodoContext from './utils/TodoContext';
function App() {
 
  const [todos, setTodos] = useState([]);
  
   return (
    <TodoContext.Provider value={{todos, setTodos}} >
    <div className="App">
          <Todos/>
    </div>
    </TodoContext.Provider >
  );
}

export default App;
