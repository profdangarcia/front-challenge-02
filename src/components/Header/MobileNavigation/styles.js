import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 300px;
  padding: 20px 0 35px;
  border-radius: 4px;

  opacity: ${props => props.show ? 1: 0};
  top: ${props => props.show ? '85px': '-400px'};
  transition: opacity 0.5s ease;
`;


export const NavList = styled.ul`
  list-style: none;
`;


export const NavItem = styled.li`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a{
    text-decoration: none;
    color: #444;
    cursor: pointer;
    font-size: 16px;

    &:hover{
      font-size: 18px;
      color: #888;
    }
  }
  
`;
