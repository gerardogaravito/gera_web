import { createGlobalStyle } from "styled-components"
import { fonts } from './stylesVariables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${fonts.font_system};
  }
  h1 {
    font-size: ${fonts.h1};
    font-weight: normal;
  }
	h2 {
    font-size: ${fonts.h2};
    font-weight: normal;
  }
	h3 {
    font-size: ${fonts.h3};
    font-weight: normal;
  }
	p {
    font-size: ${fonts.p};
  }
	small {
    font-size: ${fonts.small};
  }
`