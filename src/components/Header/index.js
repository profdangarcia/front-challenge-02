import React, {useState} from 'react';

import { Container } from './styles';
import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import logo from '../../assets/logo.svg';
import MobileNavigation from './MobileNavigation';

function Header() {
  
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <Container show={showMobileMenu}>
        <img alt="logo" src={logo} />
        <button 
          type="button" 
          className="menu-button" 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <GoThreeBars className="bars-icon" />
          <GrClose className="close-icon" />
        </button>
      </Container>
      <MobileNavigation show={showMobileMenu} />
    </>
  );
}

export default Header;