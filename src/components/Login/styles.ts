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
`;
