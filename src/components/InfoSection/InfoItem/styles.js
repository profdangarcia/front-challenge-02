import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media screen and (min-width: 1024px){
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 10px;
  }
`;

export const InfoImage = styled.img``;

export const InfoTitle = styled.h3`
  color: #444;
  font-weight: 300;
  margin: 20px 0 10px;
`;

export const InfoText = styled.p`
  color: #666;
  opacity: 0.9;
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
  text-align: center;
  max-width: 380px;

  @media screen and (min-width: 1024px){
    text-align: left;
    font-size: 16px;
  }
`;
