import React from 'react';
import { GlobalStyle } from './globalStyles';
import styled from 'styled-components';
import TodoCard from './components/TodoCard';

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Title>
        <Text>Todo</Text>
      </Title>
      <TodoCard />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  background: #eeeeee;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  // media
  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
  }
`;

const Title = styled.div`
  margin-right: 296px;

  // media
  @media (max-width: 375px) {
    margin-right: 0;

    h1 {
      font-size: 24px;
      font-weight: 700;
      font-size: 36px;
      line-height: 67px;
    }
  }
`;

const Text = styled.h1`
  font-weight: 700;
  font-size: 96px;
  line-height: 116px;

  color: #007fdb;
`;

export default App;
