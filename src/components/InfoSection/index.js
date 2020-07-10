import React from 'react';

import Wrapper from '../shared/Wrapper';
import SectionTitle from '../shared/SectionTitle';
import InfoItem from './InfoItem';
import infoTexts from './infoTexts';
import { Container, Content, InfoItemsBox } from './styles';

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
          <InfoItemsBox>
            <InfoItem iconType="online" infoTitle={infoTexts.online.title} infoText={infoTexts.online.text}/>
            <InfoItem iconType="budget" infoTitle={infoTexts.budget.title} infoText={infoTexts.budget.text}/>
            <InfoItem iconType="onboard" infoTitle={infoTexts.onboard.title} infoText={infoTexts.onboard.text}/>
            <InfoItem iconType="api" infoTitle={infoTexts.api.title} infoText={infoTexts.api.text}/>
          </InfoItemsBox>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default InfoSection;