import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { add_todo } from '../../store/actions/todoList';
import { useDispatch, useSelector } from 'react-redux';
import './TodoList.css';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(add_todo(inputValue));
      setInputValue('');
    }
  };
  

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
          className="todo-input"
        />
        <button
          className="btn btn-outline-info todo-button"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, id) => (
          <TodoItem todo={todo} key={todo.id} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
