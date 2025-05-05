import { Checkbox } from 'antd';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.6 : 1,
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: 8 }}
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoItem;
