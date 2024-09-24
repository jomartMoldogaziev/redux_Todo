import React from 'react';
import { connect } from 'react-redux';
import { toggle_todo, delete_todo } from '../../store/actions/todoList';
import './TodoItem.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = ({ todo, toggle_todo, delete_todo, id }) => {
  return (
    <div className="todo-item" style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
 <span className={`todo-text ${todo.complete ? 'strike-through' : ''}`}>
        {todo.text}
      </span>
        <div className="button-container">
        <button className="btn btn-success" onClick={() => toggle_todo(id)}>Complete</button>
        <button className="btn btn-danger" onClick={() => delete_todo(id)}>Delete</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggle_todo: (id) => dispatch(toggle_todo(id)),
  delete_todo: (id) => dispatch(delete_todo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
