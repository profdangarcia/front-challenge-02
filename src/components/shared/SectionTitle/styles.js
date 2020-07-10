import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 1024px){
    align-items: flex-start;
    width: 100%;
    padding: 0 20px;
  }
`;

export const Title = styled.h2`
  color: #444;
  font-weight: 300;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 1024px){
    text-align: left;
  }
`;

export const SubTitle = styled.h3`
  color: #666;
  opacity: 0.9;
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: 1024px){
    text-align: left;
    max-width: 500px;
  }
`;

