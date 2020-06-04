import React from 'react';

import { Container, Content, ImageBox, InfoBox, Other} from './styles';
import imageMockups from '../../assets/image-mockups.png';
import Wrapper from '../shared/Wrapper';
import RequestButton from '../shared/RequestButton';

function IntroSection() {
  return (
    <>
    <Container>
      <Content>
        <ImageBox>
          <center>
          <img 
            className="mockup-image"
            src={imageMockups} 
            alt="App Preview" />
          </center>
        </ImageBox>
        <InfoBox>
          <h1>Next generation digital banking</h1>
          <h2>
            Take your financial life online. Your EasyBank account
            {` `}will be a one-stop-shop for spending, saving, budgeting,
            {` `}investing, and much more.
          </h2>
          <RequestButton />
        </InfoBox>
      </Content>
    </Container>
    <Other />
    </>
  );
}

export default IntroSection;