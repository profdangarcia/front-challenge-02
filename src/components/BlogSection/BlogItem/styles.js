import styled from 'styled-components';

export const Container = styled.a`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  max-width: 380px;
  cursor: pointer;
  border-radius: 6px;

  &:hover{
    box-shadow: 0 3px 8px #ccc;

    h3{
      color: hsl(136, 65%, 51%);
    }
  }

  @media screen and (min-width: 1024px){
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const BlogPicture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 6px 6px 0 0;
`;

export const PostTextsBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 0 0 6px 6px;
  padding: 20px 15px;
`;

export const PostAuthor = styled.p`
  color: #666;
  opacity: 0.9;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
`;

export const PostTitle = styled.h3`
  color: #444;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin: 10px 0 10px;
`;

export const PostText = styled.p`
  color: #666;
  opacity: 0.9;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
`;
