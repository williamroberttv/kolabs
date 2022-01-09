import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  letter-spacing: -2.5px;

  span{
    font-size: 72px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: -30px;
    @media(max-width: 785px) {
      font-size: 56px;
      margin-bottom: -20px;
    }
    @media(max-width: 437px) {
      font-size: 32px;
    }
  }
`;

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 144px;
  text-transform: uppercase;

  @media(max-width: 780px) {
    font-size: 82px;
  }
  @media(max-width: 437px) {
    font-size: 64px;
  }
`;
