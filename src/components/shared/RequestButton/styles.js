import styled from 'styled-components';

export const Container = styled.button`
  width: 140px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  border-radius: 500px;
  padding: 12px 0;
  border: none;
  background: linear-gradient(to right, hsl(136, 65%, 51%) , hsl(192, 70%, 51%));

  &:hover {
    opacity: 0.7;
  }
`;
