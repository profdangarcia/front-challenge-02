import React from 'react';

import { 
  Container, 
  Content, 
  SocialMediaBox, 
  LinksBox,
  InviteBox,
  SocialMediaIcon,
  SocialMediaLink,
  IconsBox,
  LinkItem
} from './styles';
import whiteLogo from '../../assets/white-logo.svg';
import facebook from '../../assets/icon-facebook.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import twitter from '../../assets/icon-twitter.svg';
import youtube from '../../assets/icon-youtube.svg';
import instagram from '../../assets/icon-instagram.svg';

import {linkItems} from './linkItems';

import Wrapper from '../shared/Wrapper';
import RequestButton from '../shared/RequestButton';

function Footer() {

  const links = linkItems.map(link => (
    <LinkItem 
      href={link.url} 
      target="_blank"
    >
      {link.title}
    </LinkItem>
  ))

  return (
    <Container>
      <Wrapper>
        <Content>
          <SocialMediaBox>
            <img 
              className="white-logo" 
              src={whiteLogo}
              alt="EasyBank Logo"
            />
            <IconsBox>
              <SocialMediaLink>
                <SocialMediaIcon src={facebook} alt="Facebook" />
              </SocialMediaLink>
              <SocialMediaLink>
                <SocialMediaIcon src={youtube} alt="Youtube" />
              </SocialMediaLink>
              <SocialMediaLink>
                <SocialMediaIcon src={twitter} alt="Twitter" />
              </SocialMediaLink>
              <SocialMediaLink>
                <SocialMediaIcon src={pinterest} alt="Pinterest" />
              </SocialMediaLink>
              <SocialMediaLink>
                <SocialMediaIcon src={instagram} alt="Instagram" />
              </SocialMediaLink>
            </IconsBox>
          </SocialMediaBox>
          <LinksBox>
            {links}
          </LinksBox>
          <InviteBox>
            <RequestButton />
            <p>© Easybank. All Rights Reserved</p>
          </InviteBox>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Footer;