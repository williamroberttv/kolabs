import styled from 'styled-components';

interface ContainerProps {
  imageUrl: string;
}

export const Texture = styled.div<ContainerProps>`
  background: url(${props => props.imageUrl});
  backdrop-filter:blur(25px);
  border-radius: 15px;
  width: 264px;
  height: 360px;
  opacity: 0.3;
  position:absolute;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  background: linear-gradient(180deg, rgba(255, 255,255,0.75) 0%,
 rgba(255, 255,255, 0.1) 100%);
  backdrop-filter:blur(25px);
  border-radius: 15px;
  width: 264px;
  height: 360px;
  display: flex;
  align-items:center;
  justify-items:center;
  flex-direction:column;
  img{
  width: 56px;
  height: 43px;
  margin-top: 16px;
  }
  h1{
    text-transform: uppercase;
    font-size: 50px;
    line-height: 64px;
    color: #262626;
    margin-top:26px;

  }
  button{ 
    margin-top: 26px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    width: 220px;
    height: 36px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(69, 16, 138, 0.2)
     0%, rgba(164, 94, 255, 0.2) 94.59%);
    box-shadow: 0px -4px 6px rgba(255, 255, 255, 0.2),
    0px 5px 10px rgba(0, 0, 0, 0.15);
    transition: filter 0.3s;
    &:hover{
      background: linear-gradient(180deg, rgba(69, 16, 138, 0.5) 0%,
       rgba(164, 94, 255, 0.5) 94.59%);
       filter: brightness(0.8);
    }
  }
`;
