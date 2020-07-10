import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, SubTitle } from './styles';

function SectionTitle({title, subtitle = null}) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <SubTitle>
        {subtitle}
      </SubTitle>
    </Container>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default SectionTitle;