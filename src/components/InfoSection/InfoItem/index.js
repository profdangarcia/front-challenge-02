import React from 'react';
import PropTypes from 'prop-types';

import apiIcon from '../../../assets/icon-api.svg';
import budgetIcon from '../../../assets/icon-budgeting.svg';
import onboardingIcon from '../../../assets/icon-onboarding.svg';
import onlineIcon from '../../../assets/icon-online.svg';

import { Container, InfoImage, InfoTitle, InfoText } from './styles';

function InfoItem({iconType, infoTitle, infoText}) {

  const iconTypes = {
    api: apiIcon,
    budget: budgetIcon,
    onboard: onboardingIcon,
    online: onlineIcon,
  };

  return (
    <Container>
      <InfoImage src={iconTypes[iconType]}/>
      <InfoTitle>
        {infoTitle}
      </InfoTitle>
      <InfoText>
        {infoText}
      </InfoText>
    </Container>
  );
}

InfoItem.propTypes = {
  iconType: PropTypes.string.isRequired,
  infoTitle: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
}

export default InfoItem;