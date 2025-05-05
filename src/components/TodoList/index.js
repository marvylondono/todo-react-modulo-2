import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem';
import AddTodo from '../AddTodo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <div className="todo-list">
      <h1>Lista de tareas (Todo List)</h1>
      <AddTodo />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
