import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  input{
    background: rgba(119, 61, 177, 0.08);
    border:none;
    border-radius: 10px;
    box-shadow: inset 0px 4px 15px rgba(0, 0, 0, 0.25), 
    inset 0px -5.95px 15px 3px rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(100px);
    width: 220px;
    height: 36px;
    opacity: 0.5;
    mix-blend-mode: multiply;
  }
  span{
    text-transform: uppercase;
    font-size: 8px;
    color: rgba(255, 85, 85, 1);
    margin-top: 5px;
  }
`;
