import React, { useEffect } from 'react';
import styled from 'styled-components';
import flowersBG from '../assets/flowersBG.png';
import moment from 'moment';

const CardHeader = () => {
  return (
    <Header>
      <BackGround>
        <Image src={flowersBG} />
      </BackGround>
      <CurrentDate>
        <Day>{moment().format('ddd MM')}</Day>
        <Clock>{moment().format('LT')}</Clock>
      </CurrentDate>
    </Header>
  );
};

const Header = styled.div`
  position: relative;
`;

const BackGround = styled.div`
  //media query
  @media (max-width: 375px) {
    width: 360px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Image = styled.img``;

const CurrentDate = styled.div`
  position: absolute;
  top: 114px;
  right: 28px;
`;

const Day = styled.h3`
  font-family: 'Russo One';
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;
  text-align: right;

  //media query
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
const Clock = styled.h3`
  font-family: 'Russo One';
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */
  /* text-align: right; */

  color: #ffffff;

  //media query
  @media (max-width: 375px) {
    font-size: 36px;
  }
`;

export default CardHeader;
