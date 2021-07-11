
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'

import TodoContext from './utils/TodoContext';
import All from './pages/All';
import Completed from './pages/Completed';
import Active from './pages/Active';
import TypingBar from './components/TypingBar';

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  return (
    <TodoContext.Provider value={{ todos, setTodos, text, setText }} >
      <Router>

        <div className="App">
          <TypingBar />
          <Switch>
            <Route path='/' exact>
              <All />
            </Route>
            <Route path='/todos/active'>
              <Active />
            </Route>
            <Route path='/todos/completed'>
              <Completed />
            </Route>
          </Switch>

        </div>
      </Router>
    </TodoContext.Provider >
  );
}

export default App;

// 1. create all, active, and completed page
//2, create a checkbox to complete the task
//delete  a task// 4. check hoe to add a todo by hit the enter key instead submit button
// once complete typing the input will go back to blank
// 5. change the order of the lists 