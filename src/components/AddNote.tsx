import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { TodoProps } from '../model';

type Props = {
  todos: TodoProps[];
  addTodo: string | number;
  setAddTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  // setTodos: React.Dispatch<React.SetStateAction<any>>;
};

const AddNote = ({ addTodo, setAddTodo, todos, setTodos }: Props) => {
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (addTodo === '') return;

    const newTodo: any = {
      id: uuidv4(),
      title: addTodo,
      completed: false,
      createdAt: moment().calendar(),
    };

    setTodos([...todos, newTodo]);
    setAddTodo('');
  };

  return (
    <Form onSubmit={handleAddTodo}>
      <CheckIcon>
        <AiOutlineCheck />
      </CheckIcon>
      <Input
        type='text'
        placeholder='Note'
        value={addTodo}
        onChange={e => setAddTodo(e.target.value)}
      />
      <Button type='submit'>
        <AiOutlinePlus />
      </Button>
    </Form>
  );
};

const Form = styled.form`
  margin: 23px 28px 36px 29px;
  display: flex;
  flex: none;
  position: relative;

  // media queries
  @media (max-width: 365px) {
  }
`;

const Input = styled.input`
  width: 275px;
  height: 49px;
  padding: 15px 0 15px 48px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  background: #ebeff2;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
  }

  // media queries
  @media (max-width: 375px) {
    width: 270px;
    height: 32px;
    /* height: 49px; */
    flex: 1;
  }
`;

const Button = styled.button`
  margin-left: 10px;
  flex: 1;

  background: #20eeb0;
  border-radius: 5px;
  border: none;

  color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    background: #43fac3;
  }

  svg {
    width: 26px;
    height: 26px;
  }

  // media queries

  @media (max-width: 375px) {
    flex: 1;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const CheckIcon = styled.div`
  position: absolute;
  background: #20eeb0;
  border: 2px solid #20eeb0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 14px;
  left: 16px;

  svg {
    width: 12px;
    height: 12px;
  }

  // media queries

  @media (max-width: 375px) {
    width: 14px;
    height: 14px;

    top: 10px;
    /* left: 10px; */
  }
`;

export default AddNote;
