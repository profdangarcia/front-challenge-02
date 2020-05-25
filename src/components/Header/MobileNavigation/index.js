import React from 'react';

import { Container, NavList, NavItem } from './styles';

function MobileNavigation({show}) {
  return (
    <Container show={show}>
      <NavList>
        <NavItem><a href="#">Home</a></NavItem>
        <NavItem><a href="#">About</a></NavItem>
        <NavItem><a href="#">Contact</a></NavItem>
        <NavItem><a href="#">Blog</a></NavItem>
        <NavItem><a href="#">Carreers</a></NavItem>
      </NavList>
    </Container>
  );
}

export default MobileNavigation;