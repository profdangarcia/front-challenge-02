import React, {useState} from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdClose } from 'react-icons/md';

import { Container, Content, NavList, NavItem } from './styles';
import logo from '../../assets/logo.svg';
import Wrapper from '../Wrapper';
import RequestButton from '../RequestButton';
import MobileNavigation from './MobileNavigation';

function Header() {
  
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Content show={showMobileMenu}>
          <img alt="logo" src={logo} className="logo"/>
          <NavList>
            <NavItem><a href="#">Home</a></NavItem>
            <NavItem><a href="#">About</a></NavItem>
            <NavItem><a href="#">Contact</a></NavItem>
            <NavItem><a href="#">Blog</a></NavItem>
            <NavItem><a href="#">Carreers</a></NavItem>
          </NavList>
          <div className="request-button-box">
            <RequestButton />
          </div>
          <button 
            type="button" 
            className="menu-button" 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <GoThreeBars className="bars-icon" />
            <MdClose className="close-icon" />
          </button>
        </Content>
        <MobileNavigation show={showMobileMenu} />
      </Wrapper>
    </Container>
  );
}

export default Header;