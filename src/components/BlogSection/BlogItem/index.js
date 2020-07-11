import React from 'react';
import PropTypes from 'prop-types';

import confettiImage from '../../../assets/image-confetti.jpg';
import planeImage from '../../../assets/image-plane.jpg';
import currencyImage from '../../../assets/image-currency.jpg';
import restaurantImage from '../../../assets/image-restaurant.jpg';

import { 
  Container, 
  BlogPicture, 
  PostAuthor, 
  PostTitle, 
  PostText,
  PostTextsBox 
} from './styles';

function BlogItem({postPic, postTitle, postAuthor, postText}) {

  const postImages = {
    confetti: confettiImage,
    plane: planeImage,
    currency: currencyImage,
    restaurant: restaurantImage
  };

  return (
    <Container>
      <BlogPicture src={postImages[postPic]}/>
      <PostTextsBox>
        <PostAuthor>
          {postAuthor}
        </PostAuthor>
        <PostTitle>
          {postTitle}
        </PostTitle>
        <PostText>
          {postText}
        </PostText>
      </PostTextsBox>
    </Container>
  );
}

BlogItem.propTypes = {
  postPic: PropTypes.string.isRequired,
  postAuthor: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postText: PropTypes.string.isRequired,
}

export default BlogItem;