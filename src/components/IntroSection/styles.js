import styled from 'styled-components';
import mobileBg from '../../assets/bg-intro-mobile.svg';
import desktopBg from '../../assets/bg-intro-desktop.svg';

export const Container = styled.div`
  background: #fff;
  width: 100%;

  @media screen and (min-width: 1024px){
    background: #fafafa;
  }
`;

export const Content = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px){
    flex-direction: row;
    height: 85vh;
    max-height: 600px;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  background-color: #fff;
  background: url(${mobileBg}) no-repeat;
  background-size: cover;
  background-position: 0 -6vh;
  overflow: hidden;

  .mockup-image{
    width: 100%;
    margin-top: -132px;
    max-width: 500px;
  }

  @media screen and (min-width: 1024px){
    position: relative;
    order: 2;
    height: 100%;
    width: 100%;
    background: url(${desktopBg}) no-repeat;
    background-position: 26px -249px;
    overflow: visible;
    .mockup-image{
      width: 100%;
      height: auto;
      max-width: 750px;
      clip-path: polygon(0 20%, 100% 20%, 100% 100%, 0% 100%);
      position: absolute;
      right: -130px;
      top: -16px;
    }
  }

  @media screen and (min-width: 1326px){
    .mockup-image{
      top:-51px;
    }
  }
`;

export const InfoBox = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;

  h1 {
    font-size: 32px;
    line-height: 36px;
    font-weight: 300;
    margin-top: 15px;
    color: #444;
  }

  h2 {
    color: #666;
    opacity: 0.9;
    font-size: 14px;
    line-height: 23px;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px){
    height: 100%;
    width: 60%;
    padding: 0 0 0 20px;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    overflow: visible;

    h1 {
      font-size: 48px;
      line-height: 56px;
    }

    h2 {
      font-size: 17px;
      line-height: 26px;
    }
  }

  @media screen and (min-width: 1366px){
    padding: 0 0 0 110px;
  }

  @media screen and (min-width: 1440px){
    padding: 0 0 0 140px;
  }
`;