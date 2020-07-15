import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: hsl(233, 26%, 24%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0;
`;

export const SocialMediaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const SocialMediaLink = styled.a`
  margin-right: 15px;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    svg{
      color: red;
    }
  }
`;

export const SocialMediaIcon = styled.img`
  color: red;
`;

export const LinksBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
`;