import { styled } from 'styled-components'

const PrimaryButton = styled.button`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
  font-family: Borel-Regular;
`

export { PrimaryButton }
