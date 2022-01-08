import styled from 'styled-components';

export const Container = styled.footer`
  position:absolute; 
  bottom: 0;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.25);

  @media(min-width: 785px) {
     left: 0;
     margin: 0 0 10px 13px;
    }
`;
