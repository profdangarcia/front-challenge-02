import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #fff;

  svg {
    font-size: 23px;
    font-weight: 300;
  }

  .bars-icon {
    opacity: ${props => props.show ? 0: 1};
    position: ${props => props.show ? 'absolute': 'relative'};
    top: -400;
    transition: opacity 0.5s ease-in-out;
  }

  .close-icon {
    opacity: ${props => props.show ? 1: 0 };
    position: ${props => props.show ? 'relative': 'absolute'};
    top: -400;
    transition: opacity 0.5s ease-in-out;
    transition: position 0.5s ease-in-out;
  }

  .menu-button{
    background: none;
    border: none;
  }
`;
