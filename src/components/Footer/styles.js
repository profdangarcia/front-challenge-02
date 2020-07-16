import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: hsl(233, 26%, 24%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0;

  @media screen and (min-width: 1024px){
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
  }
`;

export const SocialMediaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px){
    align-items: flex-start;
    width: 50%;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  width: 100%;

  & a:last-child{
    margin-right:0;
  }

  @media screen and (min-width: 1024px){
    justify-content: flex-start;
    margin: 50px 0 0;
  }
`;

export const SocialMediaLink = styled.a`
  margin-right: 15px;
  text-decoration: none;
  cursor: pointer;
`;

export const SocialMediaIcon = styled.img`
`;

export const LinksBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 1024px){
    height: 110px;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const LinkItem = styled.a`
  text-decoration: none;
  color: #fff;
  margin-bottom: 15px;
  font-size: 14px;
  transition: color 0.2 ease-in;

  &:hover{
    color: hsl(136, 65%, 51%);
  }

  @media screen and (min-width: 1024px){
    font-size: 16px;
  }
`;

export const InviteBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  p{
    margin-top: 20px;
    font-size: 12px;
    color: hsl(233, 8%, 62%);
    opacity: 0.9;
  }

  @media screen and (min-width: 1024px){
    margin-top: 0;
    align-items: flex-end;
  }
`;