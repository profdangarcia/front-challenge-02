import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  svg {
    font-size: 24px;
    font-weight: 300;
    color: #666;
  }

  .bars-icon {
    opacity: ${props => props.show ? 0: 1};
    position: ${props => props.show ? 'absolute': 'relative'};
    transition: opacity 0.5s ease-in-out;
  }

  .close-icon {
    opacity: ${props => props.show ? 1: 0 };
    position: ${props => props.show ? 'relative': 'absolute'};
    transition: opacity 0.5s ease-in-out;
    transition: position 0.5s ease-in-out;
  }

  .menu-button{
    background: none;
    border: none;
  }

  .request-button-box {
    display: none;
  }

  @media screen and (min-width: 1024px){
    .menu-button {
      display: none;
    }
    .request-button-box {
      display: block;
    }
  }
`;

export const NavList = styled.ul`
  display: none;

  @media screen and (min-width: 1024px){
    width: 40%;
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavItem = styled.li`
  position: relative;
  a{
    font-size: 16px;
    color: #aaa;
    text-decoration: none;
  }

  &:hover{

    a{
      color: #666;
    }

    &:after{
      position: absolute;
      bottom: -27px;
      left: 0px;
      content: '';
      height: 3px;
      background: linear-gradient(to right, hsl(136, 65%, 51%) , hsl(192, 70%, 51%));;
      width: 105%;
    }

  }
`;