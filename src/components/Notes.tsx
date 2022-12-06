import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { TodoProps } from '../model';

interface Props {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  handleDelete: (id: number) => void;
}

const Notes = ({ todos, setTodos, handleDelete }: Props) => {
  const handleCompleted = (id: any) => {
    setTodos(
      todos.map((todo: any) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  // useEffect(() => {
  //   if (completed) {
  //     console.log('completed');
  //   }
  // }, []);

  return (
    <Container>
      {todos.length > 0 ? (
        todos.map((todo: any) => (
          <NotesWrapper>
            <Note key={todo.id}>
              <NoteText>{todo.title}</NoteText>
              <NoteDate>{todo.createdAt}</NoteDate>
            </Note>
            <NoteIcons>
              <AiOutlineCheck
                onClick={() => handleCompleted(todo.id)}
                style={{
                  background: todo.completed ? '#20eeb0' : '',
                }}
              />
              <FiTrash2 onClick={() => handleDelete(todo.id)} />
            </NoteIcons>
          </NotesWrapper>
        ))
      ) : (
        <NoTodos>Add a note</NoTodos>
      )}
    </Container>
  );
};

const NotesWrapper = styled.div`
  margin: 36px 30px 0 29px;
  display: flex;
  /* flex-direction: column; */

  justify-content: space-between;
  /* align-items: center; */
`;

const Container = styled.div`
  height: 320px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NoTodos = styled.h1`
  display: flex;
  justify-content: center;

  color: #888888;

  // media  queries

  @media (max-width: 365px) {
    font-size: 14px;
  }
`;

const Note = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const NoteText = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  text-transform: capitalize;
  margin-bottom: 5px;

  color: #0d0d0d;
`;
const NoteDate = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #888888;
`;
const NoteIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  svg:nth-child(1) {
    border: 2px solid #20eeb0;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
  }

  svg:nth-child(2) {
    color: #ff4545;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

// const CheckIcon = styled(AiOutlineCheck)<Props>`
//   background: ${({ completed }) => {
//     if (completed) {
//       return '#20eeb0';
//     }
//     return '#ebeff2';
//   }};
// `;

export default Notes;
