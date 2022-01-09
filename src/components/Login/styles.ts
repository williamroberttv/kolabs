import styled from 'styled-components';

export const Texture = styled.div`
  background: linear-gradient(180deg, rgba(255, 255,255,0.75) 0%,
 rgba(255, 255,255, 0.1) 100%);
  backdrop-filter:blur(25px);
  border-radius: 15px;
  width: 264px;
  height: 360px;
  opacity: 0.97;
  position:absolute;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 15px;
  width: 264px;
  height: 360px;
  display: flex;
  align-items:center;
  justify-items:center;
  flex-direction:column;
  img{
  width: 82px;
  margin-top: 16px;
  }
  h1{
    text-transform: uppercase;
    font-size: 50px;
    line-height: 64px;
    color: #262626;
    @media(max-width: 780px){
      background: -webkit-linear-gradient(180deg, rgba(69, 16, 138, 0.5) 0%,
       rgba(164, 94, 255, 0.5) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
