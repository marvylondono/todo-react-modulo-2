import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Date.now(),
        text: text,
        completed: false,
      },
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <Input
        placeholder="Añadir nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: 200, marginRight: 8 }}
      />
      <Button type="primary" htmlType="submit" shape="circle">
        <PlusOutlined />
      </Button>
    </form>
  );
};

export default AddTodo;
