import { createGlobalStyle } from 'styled-components'
import RobotoWoff from './assets/fonts/Borel-Regular.ttf'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Borel-Regular';
    src: url(${RobotoWoff}) format("truetype");
  }
`

export default FontStyles
