import React, { useState } from 'react';
import styled from 'styled-components';
import AddNote from './AddNote';
import Notes from './Notes';
import { TodoProps } from '../model';

const CardBody = () => {
  const [addTodo, setAddTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleDelete = (id: number) => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <Body>
      <AddNote
        addTodo={addTodo}
        setAddTodo={setAddTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <Notes todos={todos} setTodos={setTodos} handleDelete={handleDelete} />
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;

  // media queries
  @media (max-width: 365px) {
  }
`;

export default CardBody;
