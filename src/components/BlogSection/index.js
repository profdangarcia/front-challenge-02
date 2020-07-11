import React from 'react';

import Wrapper from '../shared/Wrapper';
import SectionTitle from '../shared/SectionTitle';
import BlogItem from './BlogItem';
import blogPosts from './blogPosts';
import { Container, Content, PostItemsBox } from './styles';

function BlogSection() {

  const postItems = blogPosts.map(post => (
    <BlogItem 
      key={post.id} 
      postPic={post.image} 
      postTitle={post.title} 
      postAuthor={post.author} 
      postText={post.text} />
  ));

  return (
    <Container>
      <Wrapper>
        <Content>
          <SectionTitle 
            title="Latest Articles" 
          />
          <PostItemsBox>
            {postItems}
          </PostItemsBox>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default BlogSection;