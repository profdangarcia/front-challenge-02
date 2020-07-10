import React from 'react';

import Wrapper from '../shared/Wrapper';
import SectionTitle from '../shared/SectionTitle';
import { Container, Content } from './styles';

function InfoSection() {
  const sectionSubtitle = 
    `We leverage Open Banking to turn 
    your bank account into your financial hub.
    Control your finances like never before.`;

  return (
    <Container>
      <Wrapper>
        <Content>
          <SectionTitle 
            title="Why choose Easybank?" 
            subtitle={sectionSubtitle}
          />
        </Content>
      </Wrapper>
    </Container>
  );
}

export default InfoSection;