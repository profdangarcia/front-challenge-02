import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    font-family: 'Public Sans', sans-serif;
    font-size: 18px;
    background: #ccc;
  }

  #root {
    height: 100%;
    overflow: hidden;
  }

  button {
    cursor: pointer;
  }

`;