import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: #fafafa;
`;

export const Content = styled.div`
  padding: 60px 0;
`;

export const PostItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px){
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    align-items: flex-start;

    & a{
      margin-right: 10px;
    }

    a:last-child{
      margin-right: 0;
    }
  }
`;