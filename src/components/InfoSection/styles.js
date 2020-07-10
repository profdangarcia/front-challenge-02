import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: #f0f0f0;
`;

export const Content = styled.div`
  padding: 60px 0;
`;

export const InfoItemsBox = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px){
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
  }
`;