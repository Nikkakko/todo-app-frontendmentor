import React from 'react';
import styled from 'styled-components';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

const TodoCard = () => {
  return (
    <Card>
      <CardHeader />
      <CardBody />
    </Card>
  );
};

const Card = styled.div`
  background: #ffffff;
  width: 430px;
  height: 636px;
  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  // media
  @media (max-width: 375px) {
    /* margin: 0 40px; */
    width: 360px;
  }
`;

export default TodoCard;
