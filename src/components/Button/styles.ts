import styled from 'styled-components';

export const Container = styled.button`
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
    transition: background 0.3s;
    &:hover{
      background: linear-gradient(180deg, rgba(69, 16, 138, 0.5) 0%,
       rgba(164, 94, 255, 0.5) 94.59%);
    }
`;
