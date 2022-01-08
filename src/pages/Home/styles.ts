import styled from 'styled-components';
import Particles from 'react-tsparticles';

interface TextureProps{
  imageUrl: string;
}

export const Container = styled(Particles)`
width: 100%;
height: 100vh;
position: absolute;
background: linear-gradient(60deg, rgba(255,255,255,1) 28%,
 rgba(227,255,254,1) 42%, rgba(197,145,255,1) 100%);
 z-index:-1;
`;

export const Texture = styled.div<TextureProps>`
  background: url(${props => props.imageUrl}) repeat;
  opacity: 0.3;
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const CreateAccountTitle = styled.p`
  position: absolute;
  bottom: 29%;
  font-size: 14px;
  text-transform: uppercase;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  font-weight: 600;
  cursor: pointer;
  &:hover{
    color: rgba(102, 0, 153, 1);
    text-decoration: underline;
  }
`;
